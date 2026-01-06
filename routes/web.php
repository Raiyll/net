<?php
use App\Http\Controllers\WatchController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NetController;
use App\Http\Controllers\AccController;
use Illuminate\Http\Request;
use App\Models\User;
use Faker\Guesser\Name;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/signup/plansign', [AccController::class, 'index'])->name('signup.plansign');
    Route::get('/signup/planform', [AccController::class, 'planform'])->name('signup.planform');
    Route::get('/signup/payment', [AccController::class, 'PaymentForm'])->name('signup.paymentform');
    
    Route::post('/signup/plan-save', [AccController::class, 'savePlan'])->name('signup.saveplan');
    Route::post('/signup/paymentstore', [AccController::class, 'updatePayment'])->name('signup.payUpdate');
    Route::post('/signup/statusesupdate', [AccController::class, 'updateStatus'])->name('signup.statusUpdate');
    
    Route::get('/signup/payment/{payment}', [AccController::class, 'Payment'])->name('signup.payment');
    Route::get('/play', function () {
        return Inertia::render('watchpage');
    })->name('play');
});

Route::get('/plan', function () {
    return Inertia::render('signup/plan', [
        'email' => request('email')
    ]);
})->name('plan');
Route::get('/signup/regform', [AccController::class, 'create'])->name('signup.regform');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/watchpage', function () {
    return Inertia::render('watchpage');
})->name('watchpage');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
