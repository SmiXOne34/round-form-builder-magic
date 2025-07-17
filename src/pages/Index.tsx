
import React from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-start">
            <div className="text-sm text-gray-600">
              <p>04, Rue Zinata, résidence Misk lili, N°8 RDC. Tanger</p>
              <p>Tél.: 06 61 48 29 88 - Email: contact@immo-tanger.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <div className="text-white font-bold text-xs">JI</div>
              </div>
              <div className="text-xs text-gray-600">
                <p>Jussy Invest</p>
                <p>Agence immobilière</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div className="bg-gray-300 px-6 py-2 rounded-lg inline-block">
              <h1 className="text-lg font-semibold">Bulletin individuel d'hébergement</h1>
              <h1 className="text-lg font-semibold text-right" dir="rtl">الاستمارة الفردية للإيواء</h1>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <Card className="p-6">
          {/* Mandatory Information Section */}
          <div className="mb-8">
            <div className="bg-gray-300 px-4 py-2 rounded-lg mb-6">
              <h2 className="text-lg font-semibold flex justify-between">
                <span>Informations obligatoire</span>
                <span dir="rtl">معلومات إلزامية</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="flex justify-between text-sm mb-2">
                    <span>Nom</span>
                    <span dir="rtl">الاسم العائلي</span>
                  </Label>
                  <Input className="rounded-lg border-gray-300" />
                </div>
                <div>
                  <Label className="flex justify-between text-sm mb-2">
                    <span>Prénom</span>
                    <span dir="rtl">الاسم الشخصي</span>
                  </Label>
                  <Input className="rounded-lg border-gray-300" />
                </div>
              </div>

              {/* Gender */}
              <div>
                <Label className="flex justify-between text-sm mb-3">
                  <span>Sexe</span>
                  <span dir="rtl">الجنس</span>
                </Label>
                <div className="flex gap-8">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="homme" />
                    <Label htmlFor="homme" className="text-sm">Homme</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="femme" />
                    <Label htmlFor="femme" className="text-sm">Femme</Label>
                  </div>
                  <div className="flex items-center space-x-2 mr-auto">
                    <Checkbox id="male" />
                    <Label htmlFor="male" className="text-sm" dir="rtl">ذكر</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="female" />
                    <Label htmlFor="female" className="text-sm" dir="rtl">أنثى</Label>
                  </div>
                </div>
              </div>

              {/* Nationality */}
              <div>
                <Label className="flex justify-between text-sm mb-2">
                  <span>Nationalité</span>
                  <span dir="rtl">الجنسية</span>
                </Label>
                <Input className="rounded-lg border-gray-300" />
              </div>

              {/* Birth date */}
              <div>
                <Label className="flex justify-between text-sm mb-2">
                  <span>Date de naissance</span>
                  <span dir="rtl">تاريخ الازدياد</span>
                </Label>
                <Input type="date" className="rounded-lg border-gray-300" />
              </div>

              {/* Country of residence */}
              <div>
                <Label className="flex justify-between text-sm mb-2">
                  <span>Pays de résidence</span>
                  <span dir="rtl">بلد الإقامة</span>
                </Label>
                <Input className="rounded-lg border-gray-300" />
              </div>

              {/* Number of children */}
              <div>
                <Label className="flex justify-between text-sm mb-2">
                  <span>Nombre d'enfants-18 ans</span>
                  <span dir="rtl">عدد الأطفال دون سن 18 سنة</span>
                </Label>
                <Input type="number" className="rounded-lg border-gray-300" />
              </div>

              {/* Arrival date */}
              <div>
                <Label className="flex justify-between text-sm mb-2">
                  <span>Date d'arrivée</span>
                  <span dir="rtl">تاريخ الوصول</span>
                </Label>
                <Input type="date" className="rounded-lg border-gray-300" />
              </div>

              {/* Identity document */}
              <div>
                <Label className="flex justify-between text-sm mb-3">
                  <span>Pièce d'identité présentée</span>
                  <span dir="rtl">وثيقة الهوية المقدمة</span>
                </Label>
                <div className="flex gap-8 flex-wrap">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cnie" />
                    <Label htmlFor="cnie" className="text-sm">CNIE</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="passport" />
                    <Label htmlFor="passport" className="text-sm">Passeport</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="birth-cert" />
                    <Label htmlFor="birth-cert" className="text-sm" dir="rtl">شهادة ميلاد</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="passport-ar" />
                    <Label htmlFor="passport-ar" className="text-sm" dir="rtl">جواز السفر</Label>
                  </div>
                </div>
              </div>

              {/* Stay permit */}
              <div>
                <Label className="flex justify-between text-sm mb-3">
                  <span>Titre de séjour</span>
                  <span dir="rtl">وثائق أخرى (رقم الدخول)</span>
                </Label>
                <div className="flex gap-8 items-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="autres" />
                    <Label htmlFor="autres" className="text-sm">Autres (N° d'Admission, ...)</Label>
                  </div>
                  <div className="flex items-center space-x-2 mr-auto">
                    <Checkbox id="residence" />
                    <Label htmlFor="residence" className="text-sm" dir="rtl">إسند الإقامة</Label>
                  </div>
                </div>
              </div>

              {/* Document number */}
              <div>
                <Label className="flex justify-between text-sm mb-2">
                  <span>N° de la pièce d'identité présentée</span>
                  <span dir="rtl">رقم وثيقة الهوية المقدمة</span>
                </Label>
                <Input className="rounded-lg border-gray-300" />
              </div>
            </div>
          </div>

          {/* Accommodation Information Section */}
          <div className="mb-8">
            <div className="bg-gray-300 px-4 py-2 rounded-lg mb-6">
              <h2 className="text-lg font-semibold flex justify-between">
                <span>Informations sur l'hébergement</span>
                <span dir="rtl">معلومات عن الإيواء</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Check-in date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="flex justify-between text-sm mb-2">
                    <span>Date d'hébergement</span>
                    <span dir="rtl">تاريخ الإيواء</span>
                  </Label>
                  <Input type="date" className="rounded-lg border-gray-300" />
                </div>
                <div>
                  <Label className="flex justify-between text-sm mb-2">
                    <span>Date de départ prévisionnelle</span>
                    <span dir="rtl">تاريخ المغادرة المقدر</span>
                  </Label>
                  <Input type="date" className="rounded-lg border-gray-300" />
                </div>
              </div>

              {/* Address */}
              <div>
                <Label className="flex justify-between text-sm mb-2">
                  <span>Adresse d'appartement / Chambre</span>
                  <span dir="rtl">عنوان الشقة / الغرفة</span>
                </Label>
                <Textarea 
                  className="rounded-lg border-gray-300 min-h-[100px]" 
                  placeholder="Entrez l'adresse complète..."
                />
              </div>

              {/* Signature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm mb-2 block">Signature du client</Label>
                  <div className="border border-gray-300 rounded-lg h-32 bg-gray-50"></div>
                </div>
                <div>
                  <Label className="text-sm mb-2 block text-right" dir="rtl">توقيع الزبون</Label>
                  <div className="border border-gray-300 rounded-lg h-32 bg-gray-50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="border-t pt-4">
            <p className="text-xs text-gray-600 flex justify-between">
              <span>Carte d'identité national est obligatoire pour les marocains</span>
              <span dir="rtl">بطاقة الهوية الوطنية إلزامية للمغاربة المقيمين بالمغرب</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
