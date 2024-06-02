<?php

namespace App\Http\Service;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function authenticate(array $credentials): bool
    {
        return Auth::attempt($credentials);
    }

    public function createToken(User $user): string
    {
        return $user->createToken('main')->plainTextToken;
    }
}
