<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPlan extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'email', 'plan', 'payment'];

    public function plan()
{
    return $this->hasOne(UserPlan::class);
}

}

