<?php

namespace App\Http\Controllers;

use App\Rules\OldPassword;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function profile()
    {
        return inertia('User/Profile');
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
        ]);

        $user->update($request->only(['name', 'email']));

        return to_route('user.settings')->with('success', 'Cập nhật thông tin cá nhân thành công');
    }

    public function favorites()
    {
        return inertia('User/Favorites');
    }

    public function settings()
    {
        return inertia('User/Settings');
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'current_password' => ['required', 'string', new OldPassword()],
            'password' => ['required', 'string', 'min:6', 'different:current_password', 'confirmed'],
        ]);

        $user->update(['password' => bcrypt($request->password)]);

        return to_route('user.settings')->with('success', 'Cập nhật mật khẩu thành công');
    }
}
