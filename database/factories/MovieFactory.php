<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(3),
            'category' => $this->faker->word(),
            'thumbnail' => $this->faker->imageUrl(640, 480, 'movies'),
            'video_url' => $this->faker->url(),
        ];
    }
}
