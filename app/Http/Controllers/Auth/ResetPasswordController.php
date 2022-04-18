<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ResetPasswordController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Auth/ResetPassword', [
            'token' => $request->token,
            'email' => $request->email,
        ]);
    }

    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
        ]);

        $status = Password::reset($request->only(['email', 'password', 'password_confirmation', 'token']), function ($user, $password) {
            $user->forceFill([
                'password' => bcrypt($password),
            ])->setRememberToken(Str::random(60));
            $user->save();

            event(new PasswordReset($user));
        });

        return $status === Password::PASSWORD_RESET
            ? to_route('login')->with('success', ('Đặt lại mật khẩu thành công.'))
            : back()->withErrors(['email' => [__($status)]]);
    }
}
