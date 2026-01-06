<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
{
    
    $request->validate([
        
        'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
        'password' => ['required', Rules\Password::defaults()],
    ]);

    // Proses pembuatan user baru
    $user = User::create([
        
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    // Event setelah user berhasil terdaftar
    event(new Registered($user));

    // Login otomatis setelah registrasi
    Auth::login($user);

    // Redirect ke halaman plansign setelah berhasil login
    return to_route('signup.plansign');
}
}
