<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return inertia('Contact');
    }

    public function contact(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $contact = Contact::create($request->all());

        Mail::to($request->email)->send(new ContactMail($contact));

        return to_route('contact')->with('success', 'Tin nhắn của bạn đã được gửi đi. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
    }
}
