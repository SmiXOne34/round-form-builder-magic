
import React from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Building2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        {/* Modern Header */}
        <Card className="p-6 mb-6 border-0 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>04, Rue Zinata, résidence Misk lili, N°8 RDC. Tanger</p>
              <p>Tél.: 06 61 48 29 88 - Email: contact@immo-tanger.com</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">Jussy Invest</p>
                <p className="text-sm text-muted-foreground">Agence immobilière</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 px-6 py-3 rounded-xl inline-block">
              <h1 className="text-xl font-bold text-primary">Bulletin individuel d'hébergement</h1>
              <h1 className="text-lg font-semibold text-primary" dir="rtl">الاستمارة الفردية للإيواء</h1>
            </div>
          </div>
        </Card>

        {/* Main Form */}
        <Card className="p-8 border-0 shadow-lg">
          {/* Mandatory Information Section */}
          <div className="mb-8">
            <div className="bg-primary/5 px-6 py-3 rounded-xl mb-6 border-l-4 border-primary">
              <h2 className="text-lg font-bold flex justify-between text-primary">
                <span>Informations obligatoire</span>
                <span dir="rtl">معلومات إلزامية</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-5">
                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Nom / <span className="text-muted-foreground" dir="rtl">الاسم العائلي</span>
                    </Label>
                    <Input className="h-11" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Prénom / <span className="text-muted-foreground" dir="rtl">الاسم الشخصي</span>
                    </Label>
                    <Input className="h-11" />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <Label className="text-sm font-medium text-foreground mb-3 block">
                    Sexe / <span className="text-muted-foreground" dir="rtl">الجنس</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50">
                      <Checkbox id="homme" />
                      <Label htmlFor="homme" className="text-sm cursor-pointer">Homme / <span dir="rtl">ذكر</span></Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50">
                      <Checkbox id="femme" />
                      <Label htmlFor="femme" className="text-sm cursor-pointer">Femme / <span dir="rtl">أنثى</span></Label>
                    </div>
                  </div>
                </div>

                {/* Nationality, Country of residence, Birth date in one row */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Nationalité / <span className="text-muted-foreground" dir="rtl">الجنسية</span>
                    </Label>
                    <Input className="h-11" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Pays de résidence / <span className="text-muted-foreground" dir="rtl">بلد الإقامة</span>
                    </Label>
                    <Input className="h-11" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Date de naissance / <span className="text-muted-foreground" dir="rtl">تاريخ الازدياد</span>
                    </Label>
                    <Input type="date" className="h-11" />
                  </div>
                </div>
              </div>

               {/* Right Column */}
              <div className="space-y-5">
                {/* Number of children and adults in one row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre d'enfants-18 ans / <span className="text-muted-foreground" dir="rtl">عدد الأطفال دون سن 18 سنة</span>
                    </Label>
                    <Input type="number" className="h-11" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre d'adultes / <span className="text-muted-foreground" dir="rtl">عدد البالغين</span>
                    </Label>
                    <Input type="number" className="h-11" />
                  </div>
                </div>

                {/* Arrival date and Autres in one row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Date d'arrivée / <span className="text-muted-foreground" dir="rtl">تاريخ الوصول</span>
                    </Label>
                    <Input type="date" className="h-11" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                      Autres (N° d'Admission, ...) / <span className="text-muted-foreground" dir="rtl">وثائق أخرى</span>
                    </Label>
                    <Input className="h-11" placeholder="N° d'Admission..." />
                  </div>
                </div>

                {/* Identity document and Document number in one row */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-3 block">
                        Pièce d'identité présentée / <span className="text-muted-foreground" dir="rtl">وثيقة الهوية المقدمة</span>
                      </Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-accent/50">
                          <Checkbox id="cnie" />
                          <Label htmlFor="cnie" className="text-xs cursor-pointer">CNIE</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-accent/50">
                          <Checkbox id="passport" />
                          <Label htmlFor="passport" className="text-xs cursor-pointer">Passeport</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-accent/50">
                          <Checkbox id="birth-cert" />
                          <Label htmlFor="birth-cert" className="text-xs cursor-pointer" dir="rtl">شهادة ميلاد</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-accent/50">
                          <Checkbox id="passport-ar" />
                          <Label htmlFor="passport-ar" className="text-xs cursor-pointer" dir="rtl">جواز السفر</Label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-2 block">
                        N° de la pièce d'identité présentée / <span className="text-muted-foreground" dir="rtl">رقم وثيقة الهوية المقدمة</span>
                      </Label>
                      <Input className="h-11" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full width fields */}
            <div className="grid grid-cols-1 gap-6 mt-6">
              {/* Stay permit */}
              <div>
                <Label className="text-sm font-medium text-foreground mb-3 block">
                  Titre de séjour / <span className="text-muted-foreground" dir="rtl">إسند الإقامة</span>
                </Label>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50">
                  <Checkbox id="residence" />
                  <Label htmlFor="residence" className="text-sm cursor-pointer" dir="rtl">إسند الإقامة</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation Information Section */}
          <div className="mb-8">
            <div className="bg-primary/5 px-6 py-3 rounded-xl mb-6 border-l-4 border-primary">
              <h2 className="text-lg font-bold flex justify-between text-primary">
                <span>Informations sur l'hébergement</span>
                <span dir="rtl">معلومات عن الإيواء</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Check-in and checkout dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-foreground mb-2 block">
                    Date d'hébergement / <span className="text-muted-foreground" dir="rtl">تاريخ الإيواء</span>
                  </Label>
                  <Input type="date" className="h-11" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-foreground mb-2 block">
                    Date de départ / <span className="text-muted-foreground" dir="rtl">تاريخ المغادرة المقدر</span>
                  </Label>
                  <Input type="date" className="h-11" />
                </div>
              </div>

              {/* Address */}
              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">
                  Adresse d'appartement / Chambre / <span className="text-muted-foreground" dir="rtl">عنوان الشقة / الغرفة</span>
                </Label>
                <Textarea 
                  className="min-h-[100px]" 
                  placeholder="Entrez l'adresse complète..."
                />
              </div>
            </div>

            {/* Signature */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div>
                <Label className="text-sm font-medium text-foreground mb-3 block">Signature du client</Label>
                <div className="border-2 border-dashed border-muted rounded-xl h-32 bg-muted/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Signature zone</span>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground mb-3 block text-right" dir="rtl">توقيع الزبون</Label>
                <div className="border-2 border-dashed border-muted rounded-xl h-32 bg-muted/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm" dir="rtl">منطقة التوقيع</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="border-t pt-6">
            <div className="bg-accent/30 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground flex justify-between">
                <span>Carte d'identité national est obligatoire pour les marocains</span>
                <span dir="rtl">بطاقة الهوية الوطنية إلزامية للمغاربة المقيمين بالمغرب</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
