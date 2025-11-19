import { notFound } from 'next/navigation'
import './page.css'
// import { useLanguage } from '@/src/contexts/LanguageContext'

const specialityData: Record<string, { name: string; description: string }> = {
  'গাইনী ও অবস': {
    name: 'গাইনী ও অবস',
    description: 'Comprehensive cardiac care with advanced diagnostic and treatment facilities.',
  },
  'neurology': {
    name: 'Neurology',
    description: 'Expert neurological care for brain and nervous system disorders.',
  },
  'oncology': {
    name: 'Cancer Care Center',
    description: 'Multidisciplinary cancer treatment with cutting-edge technology.',
  },
  'orthopedics': {
    name: 'Orthopaedics & Joint Replacement Surgery',
    description: 'Advanced orthopedic care and joint replacement procedures.',
  },
}




export default function SpecialityPage({ params }: { params: { slug: string } }) {
  const speciality = specialityData[params.slug] || {
    name: params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: 'Expert medical care in this specialty with world-class facilities and experienced doctors.',
  }
  // const { t } = useLanguage()

  return (
    <div className="speciality-detail-page">
      <section className="page-hero">
        <div className="container">
          <h1>{speciality.name}</h1>
          <p>Expert care in {speciality.name}</p>
        </div>
      </section>

      <section className="speciality-content section">
        <div className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <h2>About {speciality.name}</h2>
              <p>{speciality.description}</p>
              <p>
                Our {speciality.name} সীতাকুণ্ড মডার্ন হাসপাতালের প্রসূতি ও স্ত্রীরোগ বিভাগ নারী স্বাস্থ্য সংক্রান্ত প্রতিটি ধাপে বিশেষজ্ঞ সেবা নিশ্চিত করে। এই বিশেষায়িত ক্ষেত্রে বিশ্বমানের সুযোগ-সুবিধা এবং অত্যন্ত অভিজ্ঞ ডাক্তারদের তত্ত্বাবধানে আমরা সর্বোচ্চ মানের চিকিৎসা প্রদান করতে প্রতিশ্রুতিবদ্ধ।
                প্রসূতি ও স্ত্রীরোগ বিভাগ সম্পর্কে (About Obstetrics Gynaecology)
আমাদের প্রসূতি ও স্ত্রীরোগ বিভাগ নারী ও মায়েদের জন্য নিরাপদ এবং ফলপ্রসূ চিকিৎসার কেন্দ্রবিন্দু।

আমাদের বিভাগটি অত্যাধুনিক সরঞ্জামাদি (state-of-the-art facilities) দ্বারা সুসজ্জিত। এর ফলে আমরা গর্ভধারণ থেকে শুরু করে প্রসবকালীন এবং প্রসবোত্তর সময়ে অত্যন্ত যত্নের সাথে আধুনিক চিকিৎসা প্রদান করতে সক্ষম।

এই বিভাগটি উচ্চ অভিজ্ঞতাসম্পন্ন চিকিৎসা পেশাদারদের দ্বারা পরিচালিত হয়, যারা রোগীদের সর্বোচ্চ গুণগত মানের যত্ন (highest quality of care) প্রদানে নিবেদিতপ্রাণ।

প্রদত্ত পরিষেবা (Comprehensive Services)
আমরা প্রতিটি রোগীর স্বতন্ত্র শারীরিক ও মানসিক চাহিদা বিবেচনা করে পরিষেবা দিয়ে থাকি। এর মধ্যে রয়েছে:

ব্যাপক রোগ নির্ণয় (Comprehensive Diagnostic): রোগের সঠিক কারণ ও অবস্থা নির্ণয়ের জন্য উন্নত পরীক্ষার সুবিধা।

কার্যকর চিকিৎসা (Treatment): সাধারণ স্ত্রীরোগ সমস্যা থেকে শুরু করে জটিল অস্ত্রোপচার পর্যন্ত সকল ধরনের চিকিৎসা।

পরবর্তী ফলো-আপ পরিষেবা (Follow-up services): চিকিৎসার পর নিয়মিত পর্যবেক্ষণ ও পরামর্শ প্রদান, যাতে রোগীরা দ্রুত সুস্থ হয়ে স্বাভাবিক জীবনে ফিরে আসতে পারেন।

অর্থাৎ, এই বিভাগটি একজন নারীর জীবনচক্রের প্রতিটি পর্যায়ে—কৈশোর, প্রাপ্তবয়স্ক, গর্ভধারণ এবং মেনোপজ—সম্পূর্ণ স্বাস্থ্য সহায়তা প্রদানের জন্য প্রস্তুত।

এই বিভাগের বিশেষজ্ঞ ডাক্তারদের চেম্বারের সময়সূচি অথবা কোনো নির্দিষ্ট সেবার খরচ সম্পর্কে জানতে চাইলে জিজ্ঞাসা করতে পারেন।
              </p>
            </div>
            <div className="sidebar">
              <div className="sidebar-card">
                <h3>সেবা সমূহ</h3>
                <ul>
                  <li>Consultation (পরামর্শ গ্রহণ)</li>
                  <li>Diagnostic Tests (রোগ নির্ণায়ক পরীক্ষা)</li>
                  <li>Treatment Planning (চিকিৎসা পরিকল্পনা)</li>
                  <li>Follow-up Care (পরবর্তী যত্ন/ফলো-আপ)</li>
                </ul>
              </div>
              <div className="sidebar-card">
                <h3>যোগাযোগ</h3>
                <p>অ্যাপয়েন্টমেন্টের জন্য, অনুগ্রহ করে কল করুন:</p>
                <p><strong>০১৮৪৯৭২৭৮৫৮</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

