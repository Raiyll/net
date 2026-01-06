<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\UserPlan;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\DB;

use function Pest\Laravel\get;

class AccController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('signup/plansign', [
            'email' => request('email')
        ]);

    }

    public function planform()
    {
        return Inertia::render('signup/planform', [
            'email' => request('email')
        ]);
    }

    public function savePlan(Request $request)
    {
        $request->validate([
            'plan' => 'required|in:mobile,basic,standard,premium',
            'email' => 'required|email',
        ]);

        $user = Auth::user();

        UserPlan::updateOrCreate(
            ['user_id' => $user->id],
            [
                'email' => $request->email,
                'plan' => $request->plan,
            ]
        );

        return redirect()->route('signup.paymentform');
    }

    public function updatePayment(Request $request)
    {
        $request->validate([
            'payment' => 'required',
        ]);

        $user = Auth::user();

        UserPlan::updateOrCreate(
            ['user_id' => $user->id],
            [
                'payment' => $request->payment
            ]
        );

        return redirect()->route('signup.payment', ['payment' => $request->payment]);
    }

    public function updateStatus(Request $request)
    {
        $request->validate([
            'status' => 'required',
        ]);

        $user = Auth::user();

        UserPlan::updateOrCreate(
            ['user_id' => $user->id],
            [
                'status' => $request->status
            ]
        ); return redirect()->route("dashboard");
    }

    public function PaymentForm()
    {
        return Inertia::render('payment/paymentform', [
            'email' => request('email'),
        ]);
    }

    public function Payment()
    {
        $userPlan = DB::table('user_plans')
            ->select('id', 'user_id', 'email', 'plan', 'payment')
            ->where('user_id', Auth::id())
            ->first();
            
        return Inertia::render('payment/pay', [
            'userPlan' => $userPlan
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('regform', [
            'email' => request('email'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
