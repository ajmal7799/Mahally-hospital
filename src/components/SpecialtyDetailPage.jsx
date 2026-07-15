import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

const detailsMapping = {
  "Cardiology": {
    image: "/specialties/Cardiology.png",
    description: "Cardiology is the medical specialty dedicated to the prevention, diagnosis, and treatment of heart and blood vessel disorders. Our clinic focuses on cardiovascular health, hypertension management, lipid controls, and coronary care. Through advanced diagnostic services, we help patients maintain optimal cardiovascular well-being.",
    procedures: [
      "Electrocardiogram (ECG) assessments",
      "Echocardiography (Heart Ultrasound)",
      "Exercise Stress Testing",
      "Holter monitoring for heart rhythms"
    ],
    treatments: [
      "Hypertension (high blood pressure) management",
      "Coronary artery disease medical therapy",
      "Lipid disorder control",
      "Preventive cardiovascular assessments"
    ]
  },
  "Dental Care": {
    image: "/specialties/Dental care.png",
    description: "Dental Care centers around the diagnosis, prevention, and therapeutic treatment of diseases and conditions of the oral cavity. We provide comprehensive oral rehabilitation, cavity restorations, root canals, and cosmetic alignments. Our goal is to achieve and sustain healthy smiles for patients of all age groups.",
    procedures: [
      "Root canal treatments (RCT)",
      "Surgical tooth extractions",
      "Cosmetic dental scaling and polishing",
      "Crowns and veneers placement"
    ],
    treatments: [
      "Cavity restorations and fillings",
      "Periodontal (gum disease) therapeutics",
      "Orthodontic correction assessments",
      "Oral hygiene therapy guidance"
    ]
  },
  "Dermatology": {
    image: "/specialties/Dermatologist .png",
    description: "Dermatology is the clinical branch focusing on the health and diseases of the skin, hair, nails, and mucous membranes. We diagnose and manage conditions ranging from acne and eczemas to complex skin allergies and chronic psoriasis. Our treatments combine therapeutic solutions with preventative advice for all skin types.",
    procedures: [
      "Diagnostic skin punch biopsies",
      "Cryotherapy for skin lesions",
      "Chemical peels for skin disorders",
      "Electro-cautery of skin tags"
    ],
    treatments: [
      "Eczema and psoriasis therapy",
      "Acne and rosacea medical management",
      "Fungal and bacterial skin infection cures",
      "Skin allergy management"
    ]
  },
  "Diabetes": {
    image: "/specialties/Diabetes.png",
    description: "Diabetes care is a specialized field targeting the diagnosis, dynamic blood glucose monitoring, and long-term regulation of metabolic diabetes conditions. We formulate custom insulin therapies, glucose tracking protocols, and dietary management charts. Our program is structured to prevent complications and support healthy active lives.",
    procedures: [
      "Continuous glucose monitor (CGM) setup",
      "Comprehensive diabetic foot evaluations",
      "Diabetic neuropathy assessments",
      "Retinopathy screening coordination"
    ],
    treatments: [
      "Type 1 and Type 2 diabetes medications",
      "Gestational diabetes care schedules",
      "Dietary and insulin dosage regimens",
      "Prevention of diabetic complications"
    ]
  },
  "Endocrinology": {
    image: "/specialties/Endocrinology.png",
    description: "Endocrinology is a specialized area of medicine focused on endocrine hormones, glands, and metabolic pathways. Our clinic provides treatments for thyroid conditions, hormonal imbalances, bone density disorders, and PCOS concerns. We work to restore endocrine balance and overall metabolism.",
    procedures: [
      "Thyroid nodule biopsies coordination",
      "Dynamic hormone stimulation tests",
      "Bone mineral density diagnostic reviews",
      "Adrenal and pituitary evaluations"
    ],
    treatments: [
      "Hypothyroidism and Hyperthyroidism therapies",
      "PCOS and hormonal disorder regulation",
      "Osteoporosis treatment plans",
      "Metabolic disorders management"
    ]
  },
  "Ear, Nose & Throat (ENT)": {
    image: "/specialties/ENT.png",
    description: "Otolaryngology (ENT) focuses on the medical and surgical management of disorders affecting the ear, nose, throat, and related structures. We treat throat infections, sinusitis, chronic tonsillitis, and hearing balance concerns. Our clinic offers complete diagnostics for hearing and airway health.",
    procedures: [
      "Diagnostic diagnostic nasal endoscopies",
      "Micro-suction ear wax removal",
      "Audiometry hearing evaluation checks",
      "Tonsillectomy surgery reviews"
    ],
    treatments: [
      "Chronic sinusitis and nasal allergy management",
      "Middle ear infection therapeutics",
      "Tonsillitis and throat infection treatments",
      "Vertigo and balance issues diagnostics"
    ]
  },
  "Gastroenterology": {
    image: "/specialties/Gastroenterology.png",
    description: "Gastroenterology is dedicated to the study, diagnosis, and treatment of disorders of the human digestive system and liver. We treat GERD (acid reflux), irritable bowel disease, chronic digestive pain, and liver health issues. Our diagnostics include diagnostic endoscopies and colonoscopies.",
    procedures: [
      "Diagnostic Upper Endoscopy (OGD)",
      "Colonoscopy diagnostics and reviews",
      "Endoscopic polyp removal (polypectomy)",
      "Diagnostic biopsy sample collections"
    ],
    treatments: [
      "Acid reflux (GERD) therapies",
      "Irritable Bowel Syndrome (IBS) treatments",
      "Fatty liver and biliary disorder care",
      "Chronic constipation and diarrhea cures"
    ]
  },
  "General Medicine": {
    image: "/specialties/General Medicine.png",
    description: "General Medicine provides first-contact primary care and diagnostic solutions for adults with a wide range of acute and chronic health concerns. We manage fevers, infections, respiratory issues, and lifestyle diseases. Our physicians coordinate holistic care plans and routine health evaluations.",
    procedures: [
      "Routine annual physical examinations",
      "Adult vaccination administrations",
      "Diagnostic blood panel evaluations",
      "Blood pressure monitoring schedules"
    ],
    treatments: [
      "Acute fever and seasonal infection therapies",
      "Lifestyle disease management plans",
      "Chronic geriatric healthcare",
      "Multisystem disease diagnostics"
    ]
  },
  "Gynecology": {
    image: "/specialties/Gynecology.png",
    description: "Gynecology and Obstetrics focus on the comprehensive healthcare of the female reproductive system and pregnancy milestones. We offer compassionate prenatal care, postnatal support, PCOS therapies, and infertility management. Our specialists ensure safety and comfort throughout motherhood.",
    procedures: [
      "Routine pelvic ultrasound screening",
      "Pap smear cervical checks",
      "Fetal monitoring assessments",
      "Colposcopy diagnostic setups"
    ],
    treatments: [
      "Prenatal and antenatal care schedules",
      "PCOS and menstrual disorder therapies",
      "Infertility initial evaluations",
      "Menopause transition healthcare"
    ]
  },
  "Neurology": {
    image: "/specialties/Neurology.png",
    description: "Neurology is the medical discipline concerned with the diagnostics and non-surgical treatment of disorders of the nervous system. We manage migraine headaches, seizure control, neuromuscular conditions, and post-stroke rehabilitation. Our diagnostic focus includes EEG and nerve studies.",
    procedures: [
      "Electroencephalogram (EEG) setup",
      "Nerve conduction velocity studies",
      "Lumbar puncture coordination",
      "Carotid Doppler ultrasound tests"
    ],
    treatments: [
      "Chronic migraine and headache management",
      "Seizure and epilepsy therapies",
      "Stroke recovery medical support",
      "Neuropathy pain management"
    ]
  },
  "Orthopedics": {
    image: "/specialties/Orthopedics .png",
    description: "Orthopedics is the medical specialty dedicated to the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles. We treat fractures, sports injuries, joint disorders, and chronic neck/back pain. Our team focuses on restoring complete joint mobility and function.",
    procedures: [
      "Fracture plaster and splint applications",
      "Intra-articular joint injections",
      "Arthroscopic joint check coordination",
      "Post-surgical orthopedic reviews"
    ],
    treatments: [
      "Osteoarthritis and joint pain care",
      "Sports injury ligament strain therapies",
      "Chronic neck and low back pain treatment",
      "Osteoporosis bone strength therapies"
    ]
  },
  "Pediatrics": {
    image: "/specialties/Pediatric.png",
    description: "Pediatrics is a medical specialty dedicated to the comprehensive healthcare of infants, children, and adolescents. Our team focuses on physical growth, cognitive development, dynamic immunization schedules, and preventive childhood guidance. We are committed to ensuring a supportive, clinical, and compassionate environment for your child's early milestones.",
    procedures: [
      "Child developmental tracking checks",
      "Pediatric vaccination regimens",
      "Hearing and vision screening checks",
      "Pediatric asthma nebulizations"
    ],
    treatments: [
      "Childhood infections and fevers cures",
      "Pediatric allergy and asthma care",
      "Childhood nutrition guidelines",
      "Growth monitoring and health plans"
    ]
  },
  "PMR (Rehab)": {
    image: "/specialties/PMR.png",
    description: "Physical Medicine & Rehabilitation (PMR) focuses on restoring functional ability and quality of life to those with physical impairments. We offer dedicated stroke neuro-rehabilitation, spinal cord injury therapies, and localized pain treatments. Our customized programs help patients rebuild their mobility.",
    procedures: [
      "Localized trigger point muscle injections",
      "Therapeutic physical rehab sessions",
      "Occupational therapy program reviews",
      "Joint mobilization procedures"
    ],
    treatments: [
      "Stroke recovery neuro-rehabilitation",
      "Spinal cord injury rehabilitation plans",
      "Chronic pain management therapies",
      "Musculoskeletal recovery program plans"
    ]
  },
  "Pulmonology": {
    image: "/specialties/Pulmonologi.png",
    description: "Pulmonology is the medical field focusing on the diagnostics, prevention, and treatment of respiratory tract and lung conditions. We specialize in asthma management, chronic obstructive pulmonary disease (COPD), chest allergy treatments, and sleep apnea reviews. Our clinic ensures optimal lung function and breathing ease.",
    procedures: [
      "Pulmonary Function Testing (PFT)",
      "Sleep-apnea diagnostic sleep studies",
      "Inhalation and nebulizer therapies",
      "Diagnostic bronchoscopy coordination"
    ],
    treatments: [
      "Asthma and allergic bronchitis treatments",
      "COPD and chronic bronchitis management",
      "Respiratory track infection therapies",
      "Occupational lung health monitoring"
    ]
  }
};

export default function SpecialtyDetailPage({ specialtyName, setCurrentPage, setSelectedDoctorName }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [specialtyName]);

  const detail = detailsMapping[specialtyName] || {
    image: "/specialties/General Medicine.png",
    description: "Primary diagnostics and health consultations for the community.",
    procedures: ["Diagnostic clinical reviews"],
    treatments: ["Outpatient consultations"]
  };

  const getSuitedDoctors = () => {
    const normalized = specialtyName.toLowerCase();
    return doctorsData.filter(doc => {
      const dept = doc.department.toLowerCase();
      
      // Cardiology, Dermatology, Endocrinology, Pediatrics, Neurology referrals go to General Medicine
      if (normalized === 'cardiology' && dept.includes('general medicine')) return true;
      if (normalized === 'dermatology' && dept.includes('general medicine')) return true;
      if (normalized === 'endocrinology' && dept.includes('general medicine')) return true;
      if (normalized === 'pediatrics' && dept.includes('general medicine')) return true;
      if (normalized === 'neurology' && (dept.includes('rehab') || dept.includes('general medicine'))) return true;
      
      // Exact mappings
      if (normalized === 'pmr (rehab)' && dept.includes('pmr')) return true;
      if (normalized === 'ear, nose & throat (ent)' && dept.includes('ent')) return true;
      if (normalized === 'dental care' && dept.includes('dental')) return true;
      if (normalized === 'diabetes' && dept.includes('diabetes')) return true;
      if (normalized === 'gastroenterology' && dept.includes('gastroenterology')) return true;
      if (normalized === 'gynecology' && dept.includes('gynaecology')) return true;
      if (normalized === 'orthopedics' && dept.includes('orthopedics')) return true;
      if (normalized === 'pulmonology' && dept.includes('pulmonology')) return true;
      if (normalized === 'general medicine' && dept.includes('general medicine')) return true;
      
      return dept.includes(normalized);
    });
  };

  const suitedDoctors = getSuitedDoctors();

  const handleBookAppointment = (doctorName) => {
    if (setSelectedDoctorName) {
      setSelectedDoctorName(doctorName);
    }
    if (setCurrentPage) {
      setCurrentPage('booking');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F5F7F8]">
      
      {/* Hero Header Section */}
      <section className="relative w-full bg-gradient-to-br from-[#224356] to-[#16303F] text-white py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#418C7D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#418C7D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <button 
            onClick={() => setCurrentPage('specialties')}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-light uppercase tracking-wider mb-6 bg-white/5 border border-white/10 hover:border-white/20 py-2.5 px-5 rounded-full cursor-pointer transition-all"
          >
            <ArrowLeft size={14} />
            <span>All Specialties</span>
          </button>
          
          <div className="w-12 h-[2.5px] bg-[#418C7D] mx-auto mb-4 rounded-full" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide leading-tight mb-4">
            {specialtyName}
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto font-sans uppercase tracking-wider font-semibold">
            Procedures, Treatments & Consultants
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Top Half: Cover Image and Descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left mb-12">
            {/* Cover Image */}
            <div className="lg:col-span-7 w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-md bg-secondary-bg border border-border-color/60">
              <img 
                src={detail.image} 
                alt={specialtyName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Description card */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col justify-center h-full">
              <h3 className="text-xl font-serif text-primary font-normal mb-4">About {specialtyName}</h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-sans font-medium">
                {detail.description}
              </p>
            </div>
          </div>

          {/* Middle Section: Procedures vs Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Procedures Card */}
            <div className="bg-white p-8 rounded-3xl border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
              <h3 className="text-lg font-serif text-primary font-normal tracking-wide mb-6 pb-3 border-b border-secondary-bg flex items-center gap-2.5">
                <Activity size={18} className="text-[#418C7D]" />
                <span>Procedures</span>
              </h3>
              <ul className="space-y-4">
                {detail.procedures.map((proc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#418C7D] flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80 text-sm sm:text-base font-sans">{proc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments Card */}
            <div className="bg-white p-8 rounded-3xl border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
              <h3 className="text-lg font-serif text-primary font-normal tracking-wide mb-6 pb-3 border-b border-secondary-bg flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-[#418C7D]" />
                <span>Therapies & Treatments</span>
              </h3>
              <ul className="space-y-4">
                {detail.treatments.map((treat, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#418C7D] flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80 text-sm sm:text-base font-sans">{treat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Section: Suited Specialist Doctors (Row modal format) */}
          <div className="mt-16 pt-12 border-t border-border-color/60">
            <h3 className="text-2xl font-serif text-primary font-normal text-center mb-10">
              Suited Specialist Doctors
            </h3>

            {suitedDoctors.length === 0 ? (
              <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-border-color/60 text-center text-muted-text shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
                <p className="text-sm font-sans mb-4">
                  Primary consultations are handled by our Consulting Physicians in General Medicine. Specialized referral clinics are arranged with visiting consultants.
                </p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center justify-center bg-[#418C7D] hover:bg-[#316B5F] text-white font-bold text-xs tracking-wider uppercase rounded-full py-2.5 px-6 transition-all cursor-pointer"
                >
                  Contact Helpline
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-8 justify-center mt-6">
                {suitedDoctors.map((doc) => (
                  <div 
                    key={doc.id}
                    className="bg-white border border-border-color/60 rounded-3xl p-5 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_40px_rgba(34,67,86,0.08)] group w-full sm:w-[310px] text-left"
                  >
                    {/* Top Photo Container */}
                    <div className="w-full aspect-[1310/1200] rounded-2xl bg-[#E2E6E8] overflow-hidden mb-5 relative">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
                    </div>

                    {/* Doctor Details */}
                    <div className="flex flex-col flex-grow items-center text-center px-2 mb-6">
                      <h4 className="text-lg font-bold text-primary mb-1.5 tracking-tight group-hover:text-accent transition-colors duration-300">
                        {doc.name}
                      </h4>
                      <p className="text-muted-text text-[11px] sm:text-xs leading-normal mb-3 font-medium min-h-[36px] flex items-center justify-center">
                        {doc.qualifications}
                      </p>
                      <p className="text-accent text-[11px] font-bold uppercase tracking-wider mb-1">
                        {doc.specialty}
                      </p>
                      <span className="text-[10px] bg-accent-light/50 text-[#316B5F] px-2.5 py-0.5 rounded-full font-semibold">
                        {doc.department}
                      </span>
                    </div>

                    {/* CTA Appointment Button */}
                    <div className="w-full pt-4 border-t border-border-color/60 flex items-center justify-between relative mt-auto">
                      <button
                        onClick={() => handleBookAppointment(doc.name)}
                        className="flex-grow bg-accent hover:bg-accent-dark text-white font-bold text-xs tracking-wider uppercase rounded-full py-3 px-5 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                      >
                        Book An Appointment
                      </button>
                      <div className="absolute right-[-4px] bottom-[-4px] text-border-color/80 group-hover:text-accent transition-colors duration-300 pointer-events-none">
                        <ArrowUpRight size={14} className="stroke-[1.5]" />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
