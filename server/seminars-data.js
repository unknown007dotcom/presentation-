/**
 * NOVA → AV Seminar Platform — seminar deck data.
 * Each deck: 7–10 minute presentation (11–13 short slides).
 * Layouts: cover | agenda | definition | bullets | grid | split | image | table | summary | end
 */

const PRESENTER = {
  name: 'Aviraj A. Veer',
  roll: '38',
  klass: '1st Semester, B.Sc Nursing',
  college: 'Krishna Institute of Nursing Science, Karad',
};

const SEMINARS = [
  /* ================================================================ */
  /* 1 · Principles of Body Mechanics                                  */
  /* ================================================================ */
  {
    slug: 'body-mechanics',
    title: 'Principles of Body Mechanics',
    subject: 'Nursing Foundation',
    minutes: '8–10 min',
    vibe: 'clinical · calm · precise',
    theme: {
      accent: '#0d9488', soft: '#d9ece8', bg: '#f7faf8', ink: '#0f211d', name: 'Clinical Teal',
      mode: 'light', pattern: 'grid', font: 'Sora',
      keywords: ['Balance', 'Base of support', 'Center of gravity', 'Lift with legs', 'Never twist', 'Safe transfers', 'Body mechanics'],
    },
    images: { web: 'images/body-mechanics/web-1.jpg', ai: 'images/body-mechanics/ai-1.jpg', extra: 'images/body-mechanics/ai-2.jpg' },
    gallery: [
      { image: 'images/body-mechanics/ai-3.jpg', caption: 'The protected lumbar curve' },
      { image: 'images/body-mechanics/web-2.png', caption: 'Bed positions & repositioning care' },
    ],
    slides: [
      { layout: 'cover', kicker: 'Nursing Foundation · Seminar', title: 'Principles of Body Mechanics', subtitle: 'Moving safely, lifting smartly — the physics of safe nursing care.', image: 'ai' },
      {
        layout: 'agenda',
        items: ['What is body mechanics?', 'The mechanics of balance', 'Core principles of safe movement', 'Applying principles in nursing practice', 'Errors, injuries and prevention', 'Key takeaways'],
      },
      {
        layout: 'definition',
        term: 'Body Mechanics',
        text: 'The coordinated use of the musculoskeletal system and the nervous system to maintain balance, posture and alignment while lifting, bending, moving and positioning.',
        highlight: 'Work with your muscles — not against your spine.',
      },
      {
        layout: 'grid',
        title: 'Why it matters in nursing',
        cards: [
          { t: 'Protects the nurse', d: 'Prevents back strain and musculoskeletal injury during lifts.' },
          { t: 'Protects the patient', d: 'Avoids falls, drags and unsafe transfers.' },
          { t: 'Saves energy', d: 'Efficient movement reduces fatigue across a long shift.' },
          { t: 'Builds confidence', d: 'Safe handling is professional, calm and reassuring.' },
        ],
      },
      {
        layout: 'grid',
        title: 'The mechanics of balance',
        cards: [
          { t: 'Center of gravity', d: 'Around the mid-pelvis. Lower = more stable.' },
          { t: 'Base of support', d: 'The area beneath you. Wider = more stable.' },
          { t: 'Line of gravity', d: 'Imaginary line through the COG. Keep it inside the base.' },
          { t: 'Balance', d: 'Exists when the line of gravity falls within the base of support.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Core principles — position',
        live: true,
        items: [
          { t: 'Widen your base of support', d: 'Feet shoulder-width apart, one foot slightly forward.' },
          { t: 'Lower your center of gravity', d: 'Bend at the hips and knees — never at the waist alone.' },
          { t: 'Keep the line of gravity centered', d: 'Hold the load close; lean over it, not away from it.' },
          { t: 'Face the direction of movement', d: 'Avoid twisting; turn with your feet instead.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Core principles — effort',
        items: [
          { t: 'Use large muscle groups', d: 'Thighs and hips are stronger than the back.' },
          { t: 'Push, roll or slide — don’t lift', d: 'Friction reduction beats brute force.' },
          { t: 'Tighten core muscles first', d: 'Brace the abdomen to support the spine.' },
          { t: 'Plan and communicate', d: 'Clear the path, decide signals, get help when needed.' },
        ],
      },
      {
        layout: 'split',
        title: 'Safe lifting in one picture',
        items: [
          { t: 'Staggered stance, wide base' },
          { t: 'Straight back, bent knees' },
          { t: 'Patient held close to the body' },
          { t: 'Weight shifts smoothly through the legs' },
        ],
        image: 'ai',
        caption: 'Illustration: correct transfer posture — gravity line inside a wide base.',
      },
      {
        layout: 'split',
        title: 'In daily nursing practice',
        items: [
          { t: 'Bed ↔ chair transfers', d: 'Pivot on the stronger side, use a gait belt.' },
          { t: 'Logrolling', d: 'Turn the patient as one unit to protect the spine.' },
          { t: 'Repositioning every 2 hours', d: 'Slide, don’t drag; raise the bed height first.' },
          { t: 'Ambulation support', d: 'Walk beside and slightly behind, at the patient’s pace.' },
        ],
        image: 'web',
        caption: 'Photo: supporting a patient during assisted ambulation.',
      },
      {
        layout: 'split',
        title: 'Protecting the spine in bed care',
        items: [
          { t: 'Logrolling', d: 'Turn the patient as one unit — head, trunk and limbs together.' },
          { t: 'Raise the bed first', d: 'Work at hip height so you never bend low.' },
          { t: 'Slide, don’t drag', d: 'Draw sheets cut friction and shear force.' },
        ],
        image: 'extra',
        caption: 'Illustration: logrolling keeps the spine aligned during turns.',
      },
      {
        layout: 'bullets',
        title: 'Common errors & their cost',
        items: [
          { t: 'Lifting with a rounded back', d: '→ lumbar strain, disc injury.' },
          { t: 'Twisting while carrying', d: '→ shearing force on vertebrae.' },
          { t: 'Reaching far for the load', d: '→ load torque multiplies on the spine.' },
          { t: 'Refusing help or equipment', d: '→ nurse injury and patient falls.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Nurse’s role & patient education',
        items: [
          { t: 'Assess before you move', d: 'Weight, lines, cognition, your own limits.' },
          { t: 'Use aids and teamwork', d: 'Gait belts, slide sheets, hoists — ask for help early.' },
          { t: 'Teach the patient', d: 'Sit-to-stand technique, posture while sitting, walking posture.' },
          { t: 'Model good posture', d: 'Alignment at the desk and bedside prevents deformity.' },
        ],
      },
      {
        layout: 'summary',
        title: 'Key takeaways',
        items: [
          'Body mechanics = muscles + nervous system working in coordination.',
          'Stability = low center of gravity, wide base, centered gravity line.',
          'Lift with the legs, keep it close, never twist.',
          'A safe nurse means a safe patient.',
        ],
      },
      {
        layout: 'end',
        text: 'Thank you',
        sub: 'Questions & discussion',
        refs: ['Potter & Perry — Fundamentals of Nursing', 'Kozier & Erb — Fundamentals of Nursing'],
      },
    ],
  },

  /* ================================================================ */
  /* 2 · Factors Affecting Body Alignment & Activity                   */
  /* ================================================================ */
  {
    slug: 'body-alignment',
    title: 'Factors Affecting Body Alignment & Activity',
    subject: 'Nursing Foundation',
    minutes: '8–10 min',
    vibe: 'warm · human · active',
    theme: {
      accent: '#d97706', soft: '#f6e8d4', bg: '#fbf8f3', ink: '#221708', name: 'Warm Amber',
      mode: 'light', pattern: 'dots', font: 'Fraunces',
      keywords: ['Posture', 'Alignment', 'Mobility', 'ROM exercise', 'Early ambulation', 'Activity tolerance', 'Immobility'],
    },
    images: { web: 'images/body-alignment/web-1.jpg', ai: 'images/body-alignment/ai-1.jpg', extra: 'images/body-alignment/extra-1.jpg' },
    gallery: [
      { image: 'images/body-alignment/ai-3.jpg', caption: 'Daily movement keeps alignment' },
      { image: 'images/body-alignment/web-2.jpg', caption: 'Wheelchair mobility extends activity' },
    ],
    slides: [
      { layout: 'cover', kicker: 'Nursing Foundation · Seminar', title: 'Factors Affecting Body Alignment & Activity', subtitle: 'Why posture and mobility differ from person to person — and what a nurse can do.', image: 'ai' },
      {
        layout: 'agenda',
        items: ['Defining alignment & activity', 'Physiological factors', 'Psychological factors', 'Sociocultural & developmental factors', 'Effects of immobility', 'Nursing assessment & role', 'Key takeaways'],
      },
      {
        layout: 'definition',
        term: 'Body Alignment (Posture)',
        text: 'The arrangement of body parts in relation to each other — good alignment keeps joints, muscles and the spine in safe, efficient positions.',
        highlight: 'Activity = the ability to move freely; shaped by many interacting factors.',
      },
      {
        layout: 'grid',
        title: 'Physiological factors',
        cards: [
          { t: 'Musculoskeletal health', d: 'Muscle strength, tone and joint integrity enable movement.' },
          { t: 'Nervous system integrity', d: 'Coordinates posture, balance and voluntary movement.' },
          { t: 'Energy & nutrition', d: 'Fuel for muscles; deficiencies cause weakness and fatigue.' },
          { t: 'Pain & fatigue', d: 'The most common immediate limits on activity.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Psychological factors',
        items: [
          { t: 'Motivation', d: 'The will to move decides recovery effort.' },
          { t: 'Fear', d: 'Fear of pain or falling freezes movement.' },
          { t: 'Mood', d: 'Depression slows activity; anxiety distorts posture.' },
          { t: 'Self-concept', d: 'Confidence in one’s body shapes willingness to act.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Sociocultural & environmental factors',
        items: [
          { t: 'Lifestyle & occupation', d: 'Sedentary work vs active work changes posture habits.' },
          { t: 'Cultural practices', d: 'Sitting, carrying and resting postures are learned.' },
          { t: 'Environment', d: 'Stairs, lighting, railings, bed height enable or block activity.' },
          { t: 'Support system', d: 'Family and caregivers extend a person’s mobility.' },
        ],
      },
      {
        layout: 'grid',
        title: 'Age & development',
        cards: [
          { t: 'Infancy & childhood', d: 'Growth, play and milestones build alignment.' },
          { t: 'Adolescence', d: 'Growth spurts, posture habits, sports.' },
          { t: 'Adulthood', d: 'Occupational strain, exercise habits.' },
          { t: 'Older age', d: 'Bone loss, slower reflexes, higher fall risk.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'When factors fail — effects of immobility',
        items: [
          { t: 'Musculoskeletal', d: 'Atrophy, contractures, osteoporosis.' },
          { t: 'Circulatory & respiratory', d: 'DVT, orthostatic hypotension, hypostatic pneumonia.' },
          { t: 'Skin', d: 'Pressure injuries within hours of immobility.' },
          { t: 'Psychological', d: 'Low mood, anxiety, loss of motivation.' },
        ],
      },
      {
        layout: 'split',
        title: 'Nursing assessment',
        live: true,
        items: [
          { t: 'Observe posture & gait', d: 'Standing, sitting, walking — note deviations.' },
          { t: 'Range of motion', d: 'Test major joints; compare both sides.' },
          { t: 'Muscle strength (0–5 scale)', d: 'From no contraction to full resistance.' },
          { t: 'Activity tolerance', d: 'History of fatigue, breathlessness, pain on exertion.' },
        ],
        image: 'web',
        caption: 'Illustration: correct vs incorrect standing alignment.',
      },
      {
        layout: 'split',
        title: 'Activity therapy in action',
        items: [
          { t: 'Active & passive ROM', d: 'Every major joint, moved every day.' },
          { t: 'Progressive ambulation', d: 'Bed edge → chair → corridor, step by step.' },
          { t: 'Strength rebuilds confidence', d: 'Exercise breaks the fear–immobility cycle.' },
        ],
        image: 'extra',
        caption: 'Photo: guided rehabilitation restores alignment and activity.',
      },
      {
        layout: 'bullets',
        title: 'Nursing role in promoting alignment & activity',
        items: [
          { t: 'Position & reposition', d: 'Proper support, pillows, 2-hourly turns.' },
          { t: 'Exercise therapy', d: 'Active & passive ROM, strengthening as tolerated.' },
          { t: 'Early ambulation', d: 'After surgery or illness, progress stepwise.' },
          { t: 'Educate & adapt', d: 'Teach posture, ergonomics and safe home environments.' },
        ],
      },
      {
        layout: 'summary',
        title: 'Key takeaways',
        items: [
          'Alignment and activity are shaped by body, mind, society and age.',
          'Immobility harms every system — prevention is nursing care.',
          'Assess posture, gait, ROM and strength systematically.',
          'Small nursing actions (positioning, ambulation) protect lifelong mobility.',
        ],
      },
      {
        layout: 'end',
        text: 'Thank you',
        sub: 'Questions & discussion',
        refs: ['Potter & Perry — Fundamentals of Nursing', 'Kozier & Erb — Fundamentals of Nursing'],
      },
    ],
  },

  /* ================================================================ */
  /* 3 · Social Mobility: Meaning and Types                            */
  /* ================================================================ */
  {
    slug: 'social-mobility',
    title: 'Social Mobility: Meaning and Types',
    subject: 'Applied Sociology',
    minutes: '7–9 min',
    vibe: 'thoughtful · structured · open',
    theme: {
      accent: '#7c3aed', soft: '#e9e1f9', bg: '#f9f7fc', ink: '#190f2b', name: 'Open Violet',
      mode: 'light', pattern: 'steps', font: 'Space Grotesk',
      keywords: ['Sorokin', 'Horizontal', 'Vertical', 'Upward', 'Downward', 'Inter-generational', 'Open society', 'Education'],
    },
    images: { web: 'images/social-mobility/web-1.jpg', ai: 'images/social-mobility/ai-1.jpg', extra: 'images/social-mobility/ai-2.jpg' },
    gallery: [
      { image: 'images/social-mobility/web-2.jpg', caption: 'Graduation — a classic upward step' },
      { image: 'images/social-mobility/ai-3.jpg', caption: 'Cities as ladders of opportunity' },
    ],
    slides: [
      { layout: 'cover', kicker: 'Applied Sociology · Seminar', title: 'Social Mobility: Meaning and Types', subtitle: 'How individuals and groups move between social positions — and why it matters.', image: 'ai' },
      {
        layout: 'agenda',
        items: ['Meaning of social mobility', 'Horizontal vs vertical mobility', 'Upward, downward, intra- & inter-generational', 'Factors affecting mobility', 'Mobility in the Indian context', 'Relevance to nursing', 'Key takeaways'],
      },
      {
        layout: 'definition',
        term: 'Social Mobility',
        text: 'The movement of an individual or a group from one social position or status to another — across occupations, income levels or social strata.',
        highlight: '— Concept systematized by Pitirim Sorokin (1927)',
      },
      {
        layout: 'bullets',
        title: 'Key characteristics',
        items: [
          { t: 'Universal', d: 'Present in every society, but forms differ.' },
          { t: 'Open vs closed', d: 'Class societies allow mobility; caste systems restrict it.' },
          { t: 'Individual or group', d: 'One person rises, or a whole community moves.' },
          { t: 'Directional', d: 'Can be horizontal, upward or downward.' },
        ],
      },
      {
        layout: 'grid',
        title: 'Two fundamental types',
        live: true,
        cards: [
          { t: 'Horizontal mobility', d: 'Change of position at the same rank — a staff nurse joining another hospital at the same grade.' },
          { t: 'Vertical mobility', d: 'Change of rank — a ward assistant becoming a nurse officer; a business owner facing bankruptcy.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Vertical mobility, in both directions',
        items: [
          { t: 'Upward mobility', d: 'Education, promotion, entrepreneurship lift status.' },
          { t: 'Downward mobility', d: 'Job loss, illness or stigma lower status.' },
          { t: 'Structural mobility', d: 'Whole economies shift — e.g., farm families entering service jobs.' },
        ],
      },
      {
        layout: 'grid',
        title: 'Within and between generations',
        cards: [
          { t: 'Intra-generational', d: 'Movement within one person’s lifetime — clerk to manager.' },
          { t: 'Inter-generational', d: 'Children compared with parents — a farmer’s son becoming a nurse officer.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Factors affecting social mobility',
        items: [
          { t: 'Education', d: 'The strongest engine of upward mobility.' },
          { t: 'Economy & industrialization', d: 'New occupations open new ladders.' },
          { t: 'Family & marriage', d: 'Kinship networks can raise or fix positions.' },
          { t: 'Policy', d: 'Reservations, scholarships and land reforms widen access.' },
        ],
      },
      {
        layout: 'split',
        title: 'Education — the great elevator',
        items: [
          { t: 'Skills → occupations', d: 'Degrees and diplomas open professional ladders.' },
          { t: 'First-generation students', d: 'A nursing seat can lift an entire family.' },
          { t: 'Lifelong learning', d: 'Diploma → degree → post-basic = continuing mobility.' },
        ],
        image: 'extra',
        caption: 'Illustration: education as the staircase between social positions.',
      },
      {
        layout: 'split',
        title: 'Social mobility in India',
        items: [
          { t: 'From ascription to achievement', d: 'Caste-based positions loosening with education and jobs.' },
          { t: 'Urbanization', d: 'Cities judge work more than birth.' },
          { t: 'Expansion of the middle class', d: 'Service-sector growth lifts families across generations.' },
        ],
        image: 'web',
        caption: 'Illustration: climbing between economic levels — the mobility ladder.',
      },
      {
        layout: 'bullets',
        title: 'Why a nursing student should care',
        items: [
          { t: 'Nursing is a mobility channel', d: 'Professional education lifts first-generation and rural students.' },
          { t: 'Patients experience mobility shifts', d: 'Illness can cause downward mobility — empathy matters.' },
          { t: 'Profession status', d: 'Education and research raise nursing’s social position.' },
        ],
      },
      {
        layout: 'summary',
        title: 'Key takeaways',
        items: [
          'Social mobility = movement between social positions (Sorokin).',
          'Horizontal = same level; vertical = rank change, up or down.',
          'Intra-generational = within a life; inter-generational = across generations.',
          'Education, economy and policy decide how open the ladder is.',
        ],
      },
      {
        layout: 'end',
        text: 'Thank you',
        sub: 'Questions & discussion',
        refs: ['Haralambos & Holborn — Sociology: Themes and Perspectives', 'NCERT — Introducing Sociology'],
      },
    ],
  },

  /* ================================================================ */
  /* 4 · Development of Emotions                                       */
  /* ================================================================ */
  {
    slug: 'emotional-development',
    title: 'Development of Emotions',
    subject: 'Applied Psychology',
    minutes: '8–10 min',
    vibe: 'tender · curious · human',
    theme: {
      accent: '#e11d48', soft: '#fadbe1', bg: '#fcf7f8', ink: '#26101a', name: 'Soft Rose',
      mode: 'light', pattern: 'blobs', font: 'Fraunces',
      keywords: ['Social smile', 'Attachment', 'Stranger anxiety', 'Empathy', 'Regulation', 'Temperament', 'Secure base'],
    },
    images: { web: 'images/emotional-development/web-1.webp', ai: 'images/emotional-development/ai-1.jpg', extra: 'images/emotional-development/ai-2.jpg' },
    gallery: [
      { image: 'images/emotional-development/web-2.jpg', caption: 'Co-regulation: comfort teaches calm' },
      { image: 'images/emotional-development/ai-3.jpg', caption: 'Naming feelings together' },
    ],
    slides: [
      { layout: 'cover', kicker: 'Applied Psychology · Seminar', title: 'Development of Emotions', subtitle: 'How feeling life is built — from the first cry to emotional maturity.', image: 'ai' },
      {
        layout: 'agenda',
        items: ['What is an emotion?', 'Components & classic theories', 'Emotional life of the infant', 'Attachment — the emotional foundation', 'Childhood to adolescence', 'Shaping factors & nursing relevance', 'Key takeaways'],
      },
      {
        layout: 'definition',
        term: 'Emotion',
        text: 'A complex feeling state involving bodily arousal, a subjective experience and an outward expression — organized responses that guide behaviour.',
        highlight: 'Feeling + body + expression, working together.',
      },
      {
        layout: 'grid',
        title: 'Three components of emotion',
        cards: [
          { t: 'Physiological', d: 'Heart rate, hormones, autonomic arousal.' },
          { t: 'Cognitive', d: 'Appraisal and naming of the experience.' },
          { t: 'Expressive', d: 'Face, voice, posture and action.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Classic theories — a quick map',
        items: [
          { t: 'James–Lange', d: 'We feel afraid because we tremble — body first.' },
          { t: 'Cannon–Bard', d: 'Body arousal and feeling occur together.' },
          { t: 'Schachter–Singer', d: 'Arousal + cognitive label = the emotion.' },
          { t: 'Lazarus', d: 'Appraisal of the situation comes first.' },
        ],
      },
      {
        layout: 'split',
        title: 'Infancy: the first emotions',
        live: true,
        items: [
          { t: 'Birth', d: 'Distress and contentment are present.' },
          { t: '6–8 weeks', d: 'The social smile appears.' },
          { t: '3–4 months', d: 'Anger, surprise, disgust become distinct.' },
          { t: '6–9 months', d: 'Fear emerges: stranger & separation anxiety.' },
        ],
        image: 'web',
        caption: 'Photo: infant facial expressions carry the first emotional language.',
      },
      {
        layout: 'split',
        title: 'The basic emotional toolkit',
        items: [
          { t: 'Joy & the social smile', d: 'Appears around 6–8 weeks.' },
          { t: 'Anger & fear', d: 'Distinct in the second half of year one.' },
          { t: 'Surprise & disgust', d: 'Early reactions rooted in reflexes.' },
        ],
        image: 'extra',
        caption: 'Illustration: six basic emotions readable on the infant face.',
      },
      {
        layout: 'bullets',
        title: 'Attachment — the emotional foundation',
        items: [
          { t: 'Bowlby & Ainsworth', d: 'A responsive caregiver becomes the secure base.' },
          { t: 'Security → exploration', d: 'Safe infants explore, learn and regulate better.' },
          { t: 'Long shadow', d: 'Early bonds shape later relationships and coping.' },
        ],
      },
      {
        layout: 'split',
        title: 'Childhood to adolescence',
        items: [
          { t: 'Toddler years', d: 'Tantrums peak as language lags behind feelings.' },
          { t: 'Preschool', d: 'Emotion words grow; self-conscious emotions appear — pride, shame, guilt.' },
          { t: 'School age', d: 'Empathy deepens; children hide and manage feelings.' },
          { t: 'Adolescence', d: 'Intensity rises; identity and peer emotions dominate.' },
        ],
        image: 'ai',
        caption: 'Illustration: caregiver bonding shapes the emotional blueprint.',
      },
      {
        layout: 'bullets',
        title: 'Factors shaping emotional development',
        items: [
          { t: 'Temperament', d: 'Inborn reactivity and self-soothing styles.' },
          { t: 'Parenting style', d: 'Warm, consistent responses build regulation.' },
          { t: 'Culture', d: 'Display rules decide what may be shown, to whom.' },
          { t: 'Adversity', d: 'Chronic stress or trauma can derail development.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Why nurses should care',
        items: [
          { t: 'Read development accurately', d: 'Stranger anxiety at 8 months is normal, not “difficult”.' },
          { t: 'Therapeutic communication', d: 'Name and validate emotions to calm patients.' },
          { t: 'Family support', d: 'Coach caregivers toward responsive, secure interactions.' },
          { t: 'Self-awareness', d: 'Emotional intelligence is clinical skill, not soft skill.' },
        ],
      },
      {
        layout: 'summary',
        title: 'Key takeaways',
        items: [
          'Emotion = arousal + experience + expression.',
          'Basic emotions unfold in a predictable first-year sequence.',
          'Attachment quality is the foundation of regulation.',
          'Development continues — and can be supported — at every age.',
        ],
      },
      {
        layout: 'end',
        text: 'Thank you',
        sub: 'Questions & discussion',
        refs: ['Santrock — Life-Span Development', 'Hurlock — Developmental Psychology'],
      },
    ],
  },

  /* ================================================================ */
  /* 5 · Emotional Development Across the Life Span                    */
  /* ================================================================ */
  {
    slug: 'emotions-lifespan',
    title: 'Emotional Development Across the Life Span',
    subject: 'Applied Psychology',
    minutes: '8–10 min',
    vibe: 'flowing · lifelong · warm',
    theme: {
      accent: '#4f46e5', soft: '#e0e3fa', bg: '#f7f8fc', ink: '#12142b', name: 'Deep Indigo',
      mode: 'light', pattern: 'waves', font: 'Space Grotesk',
      keywords: ['Infancy', 'Childhood', 'Adolescence', 'Adulthood', 'Older age', 'Positivity effect', 'Attachment'],
    },
    images: { web: 'images/emotions-lifespan/web-1.webp', ai: 'images/emotions-lifespan/ai-1.jpg', extra: 'images/emotions-lifespan/extra-1.jpg' },
    gallery: [
      { image: 'images/emotions-lifespan/web-2.jpg', caption: 'Emotional wisdom in later life' },
      { image: 'images/emotions-lifespan/ai-3.jpg', caption: 'Adolescent emotions, digitally mediated' },
    ],
    slides: [
      { layout: 'cover', kicker: 'Applied Psychology · Seminar', title: 'Emotional Development Across the Life Span', subtitle: 'A journey from the first social smile to the wisdom of age.', image: 'ai' },
      {
        layout: 'agenda',
        items: ['A life-span view of emotion', 'Infancy & early childhood', 'Middle childhood & adolescence', 'Adulthood & older age', 'Influencing factors', 'Nursing implications by stage', 'Key takeaways'],
      },
      {
        layout: 'definition',
        term: 'Life-Span Perspective',
        live: true,
        text: 'Emotional development does not stop at childhood — growth, change and refinement of feeling continue from birth to old age.',
        highlight: 'Development is lifelong, multidirectional and plastic.',
      },
      {
        layout: 'grid',
        title: 'Infancy (0–2 years)',
        cards: [
          { t: 'Social smile', d: 'Around 6–8 weeks — the first shared emotion.' },
          { t: 'Stranger anxiety', d: 'Peaks near 8–12 months.' },
          { t: 'Attachment', d: 'Secure bonds become the regulation template.' },
        ],
      },
      {
        layout: 'grid',
        title: 'Early childhood (2–6 years)',
        cards: [
          { t: 'Self-conscious emotions', d: 'Pride, shame, guilt and envy emerge.' },
          { t: 'Emotion language', d: 'Naming feelings begins to replace tantrums.' },
          { t: 'Early regulation', d: 'Self-distraction and simple coping appear.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Middle childhood (6–12 years)',
        items: [
          { t: 'Understanding mixed feelings', d: 'A gift can bring joy and disappointment together.' },
          { t: 'Empathy matures', d: 'Children respond to life situations, not just visible cues.' },
          { t: 'Coping strategies', d: 'Problem-solving and reframing develop.' },
          { t: 'Peer world', d: 'Approval, teasing and friendship shape emotion rules.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Adolescence (12–18 years)',
        items: [
          { t: 'Intensity & variability', d: 'Hormones, identity and social stress amplify swings.' },
          { t: 'Self-consciousness peaks', d: 'Embarrassment and pride intensify.' },
          { t: 'Autonomy', d: 'Emotional independence from parents is negotiated.' },
          { t: 'Vulnerability', d: 'Onset window for anxiety and mood disorders — watchful care matters.' },
        ],
      },
      {
        layout: 'split',
        title: 'School years — emotions in class',
        items: [
          { t: 'Mixed emotions understood', d: '“Happy but nervous” finally makes sense.' },
          { t: 'Empathy in action', d: 'Friends become emotional anchors.' },
          { t: 'Coping skills', d: 'Reframing and problem-solving grow here.' },
        ],
        image: 'extra',
        caption: 'Photo: the classroom is a laboratory of emotional learning.',
      },
      {
        layout: 'bullets',
        title: 'Adulthood (19–64 years)',
        items: [
          { t: 'Stability rises', d: 'Emotional control and predictability improve through the 30s–50s.' },
          { t: 'Intimacy & generativity', d: 'Love, career and caregiving define emotional tasks (Erikson).' },
          { t: 'Refined regulation', d: 'Adults reappraise rather than suppress more skillfully.' },
        ],
      },
      {
        layout: 'split',
        title: 'Older adulthood (65+)',
        items: [
          { t: 'Positivity effect', d: 'Attention and memory favour positive material.' },
          { t: 'Wisdom & regulation', d: 'Experience converts into calmer responses.' },
          { t: 'Loss & grief', d: 'Managing bereavement becomes a central task.' },
          { t: 'Risk', d: 'Isolation and depression are common but treatable.' },
        ],
        image: 'web',
        caption: 'Photo: emotional life is woven through family and generations.',
      },
      {
        layout: 'grid',
        title: 'Factors influencing every stage',
        cards: [
          { t: 'Biology & health', d: 'Genes, hormones, illness and sleep.' },
          { t: 'Relationships', d: 'Attachment history and current support.' },
          { t: 'Culture', d: 'Values and display rules across life.' },
          { t: 'Life events', d: 'Trauma, migration, loss — and opportunity.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Nursing implications by stage',
        items: [
          { t: 'Infants & children', d: 'Family-centred comfort; play and simple explanations.' },
          { t: 'Adolescents', d: 'Privacy, respect and honest listening.' },
          { t: 'Adults', d: 'Partnership in care decisions; acknowledge stress roles.' },
          { t: 'Older adults', d: 'Presence, dignity and screening for depression.' },
        ],
      },
      {
        layout: 'summary',
        title: 'Key takeaways',
        items: [
          'Emotional development is lifelong and multidirectional.',
          'Each stage has signature tasks — from smile to wisdom.',
          'Biology, relationships and culture shape every phase.',
          'Age-aware emotional care is better care.',
        ],
      },
      {
        layout: 'end',
        text: 'Thank you',
        sub: 'Questions & discussion',
        refs: ['Santrock — Life-Span Development', 'Berk — Development Through the Life Span'],
      },
    ],
  },

  /* ================================================================ */
  /* 6 · Parkinson’s Disease — Anatomical and Clinical Correlation     */
  /* ================================================================ */
  {
    slug: 'parkinsons-disease',
    title: 'Parkinson’s Disease — Anatomical & Clinical Correlation',
    subject: 'B.Sc Nursing · Seminar 2026',
    minutes: '9–10 min',
    vibe: 'clinical · precise · serious',
    theme: {
      accent: '#ef4444', soft: '#2a1517', bg: '#0d0f14', ink: '#eef0f5', name: 'Tulip Red · Night',
      mode: 'dark', pattern: 'ecg', font: 'Sora',
      keywords: ['Substantia nigra', 'Dopamine', 'TRAP', 'Lewy bodies', 'Levodopa', 'Bradykinesia', 'Tulip'],
    },
    images: { web: 'images/parkinsons-disease/web-1.jpg', ai: 'images/parkinsons-disease/ai-1.jpg', extra: 'images/parkinsons-disease/extra-1.jpg' },
    gallery: [
      { image: 'images/parkinsons-disease/ai-3.jpg', caption: 'The depleting dopaminergic synapse' },
      { image: 'images/parkinsons-disease/web-2.webp', caption: 'Balance & gait training in therapy' },
    ],
    slides: [
      { layout: 'cover', kicker: 'B.Sc Nursing · Seminar 2026', title: 'Parkinson’s Disease', subtitle: 'Anatomical and clinical correlation — from the substantia nigra to the bedside.', image: 'ai' },
      {
        layout: 'agenda',
        items: ['Definition & overview', 'Functional anatomy of the basal ganglia', 'Pathophysiology', 'Cardinal features — TRAP', 'Anatomy ↔ clinical correlation', 'Diagnosis, staging & management', 'Nursing care & takeaways'],
      },
      {
        layout: 'definition',
        term: 'Parkinson’s Disease',
        text: 'A progressive neurodegenerative disorder of the basal ganglia, marked by loss of dopamine-producing neurons in the substantia nigra.',
        highlight: 'Typical onset after 60 years · more common in males · ~1% of people over 60.',
      },
      {
        layout: 'split',
        title: 'Where it begins — functional anatomy',
        items: [
          { t: 'Basal ganglia', d: 'Deep grey matter circuit that plans and smooths movement.' },
          { t: 'Substantia nigra (pars compacta)', d: 'Produces dopamine for the nigrostriatal pathway.' },
          { t: 'Dopamine–ACh balance', d: 'Dopamine inhibits; acetylcholine excites — health is balance.' },
        ],
        image: 'web',
        caption: 'Illustration: the basal ganglia at the center of the movement circuit.',
      },
      {
        layout: 'bullets',
        title: 'Pathophysiology',
        live: true,
        items: [
          { t: 'Neuronal loss', d: 'Symptoms appear after ~70–80% dopaminergic depletion.' },
          { t: 'Lewy bodies', d: 'α-synuclein protein inclusions — the pathological hallmark.' },
          { t: 'Circuit failure', d: 'Under-stimulation of motor cortex → slow, stiff movement.' },
          { t: 'Relative ACh excess', d: 'Explains tremor and rigidity; target of some drugs.' },
        ],
      },
      {
        layout: 'grid',
        title: 'Cardinal features — TRAP',
        cards: [
          { t: 'T — Tremor', d: 'Resting, “pill-rolling”, improves with movement.' },
          { t: 'R — Rigidity', d: 'Cogwheel stiffness on passive movement.' },
          { t: 'A — Akinesia / Bradykinesia', d: 'Slowness, poverty of movement, masked face.' },
          { t: 'P — Postural instability', d: 'Late feature; causes falls.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Associated clinical features',
        items: [
          { t: 'Face & speech', d: 'Masked facies, hypophonia, monotonous speech.' },
          { t: 'Gait & writing', d: 'Shuffling, festinating gait; micrographia.' },
          { t: 'Bulbar & autonomic', d: 'Dysphagia, drooling, constipation, orthostatic hypotension.' },
          { t: 'Non-motor', d: 'Depression, sleep disorders, anosmia, later cognitive decline.' },
        ],
      },
      {
        layout: 'split',
        title: 'Seeing Parkinson’s — clinical signs',
        items: [
          { t: 'Pill-rolling tremor', d: 'Thumb–index rhythm, worst at rest.' },
          { t: 'Masked face & stooped posture', d: 'Hypomimia and a flexed stance.' },
          { t: 'Micrographia', d: 'Handwriting shrinks line by line.' },
        ],
        image: 'extra',
        caption: 'Photo: resting hand tremor — a cardinal clinical sign.',
      },
      {
        layout: 'table',
        title: 'Anatomy ↔ clinical correlation',
        head: ['Clinical feature', 'Anatomical / biochemical basis'],
        rows: [
          ['Resting tremor', 'Loss of nigrostriatal dopamine → oscillating basal ganglia output'],
          ['Bradykinesia', 'Reduced activation of the motor cortex via the thalamus'],
          ['Rigidity', 'Extrapyramidal tone imbalance (dopamine ↓ vs ACh ↑)'],
          ['Postural instability', 'Degeneration of brainstem reflex and balance pathways'],
          ['Masked face & micrographia', 'Bradykinesia of facial and fine hand muscles'],
        ],
      },
      {
        layout: 'split',
        title: 'Diagnosis & staging',
        items: [
          { t: 'Clinical diagnosis', d: 'TRAP features + response to levodopa.' },
          { t: 'Supportive tests', d: 'DaTscan (dopamine transporter imaging); MRI to exclude mimics.' },
          { t: 'Hoehn & Yahr 1→5', d: 'Unilateral → bilateral → imbalance → wheelchair/bedbound.' },
        ],
        image: 'ai',
        caption: 'Illustration: the substantia nigra node and the tulip — PD awareness symbol.',
      },
      {
        layout: 'bullets',
        title: 'Management overview',
        items: [
          { t: 'Levodopa + carbidopa', d: 'Gold-standard dopamine replacement.' },
          { t: 'Adjuncts', d: 'Dopamine agonists, MAO-B and COMT inhibitors, anticholinergics.' },
          { t: 'Surgery', d: 'Deep brain stimulation for selected patients.' },
          { t: 'Rehabilitation', d: 'Physiotherapy, exercise, speech and swallow therapy.' },
        ],
      },
      {
        layout: 'bullets',
        title: 'Nursing care & role',
        items: [
          { t: 'Safety first', d: 'Fall precautions, uncluttered paths, firm footwear, assisted transfers.' },
          { t: 'Nutrition', d: 'Upright feeding, small bites, high-fiber diet, swallow assessment.' },
          { t: 'Mobility & skin', d: 'ROM exercises, scheduled repositioning, cueing for gait.' },
          { t: 'Psychosocial', d: 'Treat depression; educate and support the caregiver.' },
        ],
      },
      {
        layout: 'summary',
        title: 'Key takeaways',
        items: [
          'PD = dopamine loss in the substantia nigra of the basal ganglia.',
          'TRAP: tremor, rigidity, akinesia, postural instability.',
          'Each symptom maps to a broken circuit — anatomy explains the clinic.',
          'Nursing turns medicine into safety, nutrition and dignity.',
        ],
      },
      {
        layout: 'end',
        text: 'Thank you',
        sub: 'Questions & discussion',
        refs: ['Guyton & Hall — Textbook of Medical Physiology', 'Brunner & Suddarth — Medical-Surgical Nursing'],
      },
    ],
  },
];

module.exports = { SEMINARS, PRESENTER };
