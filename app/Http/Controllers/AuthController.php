<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\Login as LoginRequest;
use App\Http\Service\AuthService;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    private AuthService $service;

    public function __construct(AuthService $service)
    {
        $this->service = $service;
    }

    public function login(LoginRequest $request)
    {
        Log::info("login action", ['request' => $request->input()]);
        $credentials = $request->only(['email', 'password']);
        $remember = $request->input('remember') ?? false;

        if (!$this->service->authenticate($credentials, $remember)) {
            return response([
                'message' => 'Email or password is incorrect'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        if (!$user->is_admin) {
            Auth::logout();
            return response([
                'message' => 'You don\'t have permission to authenticate as admin'
            ], Response::HTTP_FORBIDDEN);
        }

        $token = $this->service->createToken($user);

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout()
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        /** @var \Laravel\Sanctum\PersonalAccessToken $token */
        $token = $user->currentAccessToken();
        $token->delete();

        return response()->noContent(Response::HTTP_NON_AUTHORITATIVE_INFORMATION);
    }
}
