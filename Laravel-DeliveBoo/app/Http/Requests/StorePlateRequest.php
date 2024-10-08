<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePlateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:2|max:100|unique:plates,name',
            'ingredients' => 'required|string|max:2000',
            'price' => 'required|numeric|min:0.01|regex:/^\d+(\.\d{1,2})?$/',
            'description' => 'nullable|string|max:2000',
            'img' => 'nullable|image|max:4096', // massimo 4MB per l'immagine
            'allergenes' => 'nullable|string',
            'available' => 'boolean'
        ];
    }
}
