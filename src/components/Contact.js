import React from 'react';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        emailjs.sendForm('service_quexl4i', 'template_law2mte', e.target, 'ABeQVmFkzyPo0SWB5')
            .then(res => {
                if (res.text == 'OK') {
                    toast.success('Successfully Sent message')
                }
            }).catch(err => {
                if (err) {
                    toast.error('Something went wrong, Please try again later')
                }
            })
        e.target.reset()
    }
    return (
        <div className='mt-12' id='contact'>
            <h2 className='text-4xl font-bold text-center'>Contact With Me</h2>
            <div class="hero min-h-screen mt-[-32px]">
                <div class="hero-content flex-col-reverse lg:flex-row-reverse justify-around">
                    <div class="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-full">
                        <form onSubmit={handleSubmit} class="card-body ">
                            <div class="form-control">
                                <input name='name' type="text" placeholder="your name" class="input input-bordered text-black" />
                            </div>
                            <div class="form-control">
                                <input name='email' type="text" placeholder="your email" class="input input-bordered text-black" />
                            </div>
                            <div class="form-control">
                                <textarea name='message' type="text" placeholder="your message" class="textarea textarea-bordered h-24 text-black" />
                            </div>
                            <div class="form-control mt-2 ">
                                <input type='submit' value='Send Message' class="btn btn-success" />
                            </div>
                        </form>
                    </div>
                    <div class="text-center lg:text-left lg:w-[40%]">
                        <h1 class="text-5xl font-bold text-success ">Send Me a Massage to me</h1>
                        <p class="py-6">If you have any query to me or any kind of work you can send me a message from here. It will be my please to have your message</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;