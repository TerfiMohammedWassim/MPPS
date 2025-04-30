'use client';

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";
import { Switch } from "@radix-ui/themes";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isAccepted: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const subjects = [
    "Développement des logiciels",
    "Commerce en ligne",
    "Marketing digital",
    "UI/UX Design",
    "Autre"
  ];

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
      isValid = false;
    }

    if (!formData.subject) {
      newErrors.subject = 'Le sujet est requis';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.isAccepted) {
      alert("Veuillez accepter les conditions générales");
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await axios.post<{message:string}>('/api/contactus', formData);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Contactez-Nous</h1>
          <p className="text-lg text-gray-50">
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sujet
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              >
                <option value="">Sélectionnez un sujet</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description du Projet
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder="Votre message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Conditions Générales</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Je confirme que les informations soumises sont exactes et j&apos;accepte qu&apos;elles soient traitées conformément à la politique de confidentialité.
                  </p>
                </div>
                <Switch
                  checked={formData.isAccepted}
                  onCheckedChange={(checked) => setFormData({ ...formData, isAccepted: checked })}
                  className="ml-4"
                />
              </div>
            </div>

            <button
              type="submit"
              onSubmit={handleSubmit}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-fourth transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </>
              )}
            </button>
            {submitStatus === 'success' && (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>Message envoyé avec succès!</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                <span>Une erreur est survenue. Veuillez réessayer.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}