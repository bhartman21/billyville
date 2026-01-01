import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Get these from https://dashboard.emailjs.com
const EMAILJS_CONFIG = {
  serviceId: 'service_3zd62np',    // Create a service at EmailJS dashboard
  templateId: 'template_4jmy4hs',  // Create an email template
  publicKey: 'BL1VRATCDMrCvu5jq'     // Found in Account > API Keys
};

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss'
})
export class ContactModalComponent {
  @Output() close = new EventEmitter<void>();

  formData = {
    name: '',
    email: '',
    title: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }

  closeModal() {
    this.close.emit();
  }

  async submitForm() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: this.formData.name,
          email: this.formData.email,
          title: this.formData.title || 'BillyVille Contact Form',
          message: this.formData.message,
          time: new Date().toLocaleString()
        },
        EMAILJS_CONFIG.publicKey
      );

      this.submitStatus = 'success';
      this.formData = { name: '', email: '', title: '', message: '' };

      // Auto close after success
      setTimeout(() => this.closeModal(), 2000);
    } catch (error) {
      this.submitStatus = 'error';
      this.errorMessage = 'Failed to send message. Please try again.';
      console.error('EmailJS error:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
