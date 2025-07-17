DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE constraint_name = 'unique_title'
            AND table_name = 'courses'
    ) THEN
        ALTER TABLE courses ADD CONSTRAINT unique_title UNIQUE (title);
    END IF;
END$$;



INSERT INTO courses (id, title, description, duration, requirements) VALUES
('11111111-1111-1111-1111-111111111111', 'Community Health & HIV/AIDS Management', 'Comprehensive training in community health and HIV/AIDS management for aspiring health workers.', '1 year', ARRAY['KCSE Certificate', 'Interest in health sciences']),
('22222222-2222-2222-2222-222222222222', 'Nutrition & Dietetics', 'Learn the science of nutrition and diet planning for wellness and disease prevention.', '1 year', ARRAY['KCSE Certificate', 'Interest in nutrition']),
('33333333-3333-3333-3333-333333333333', 'Community Health & Development', 'Develop skills for community health improvement and sustainable development.', '1 year', ARRAY['KCSE Certificate', 'Passion for community work']),
('44444444-4444-4444-4444-444444444444', 'Dental Assistant Technology', 'Hands-on training for dental clinic support roles and patient care.', '1 year', ARRAY['KCSE Certificate', 'Interest in dental care']),
('55555555-5555-5555-5555-555555555555', 'Business Management', 'Practical business management skills for entrepreneurs and professionals.', '1 year', ARRAY['KCSE Certificate', 'Interest in business']),
('66666666-6666-6666-6666-666666666666', 'Computer Applications', 'Essential computer skills for the modern workplace.', '6 months', ARRAY['KCSE Certificate', 'Basic computer literacy']),
('77777777-7777-7777-7777-777777777777', 'Water Technology & Plumbing', 'Technical training in water systems and plumbing for infrastructure development.', '1 year', ARRAY['KCSE Certificate', 'Interest in technical trades']),
('88888888-8888-8888-8888-888888888888', 'First Aid, Home-Based Care & Drug Addiction Intervention', 'Skills for emergency response, caregiving, and addiction support.', '6 months', ARRAY['KCSE Certificate', 'Interest in caregiving']),
('99999999-9999-9999-9999-999999999999', 'Food & Beverage', 'Training in food preparation, safety, and service for hospitality careers.', '1 year', ARRAY['KCSE Certificate', 'Interest in hospitality']),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Environment, Climate Change & Health', 'Study the impact of environment and climate on health and wellness.', '1 year', ARRAY['KCSE Certificate', 'Interest in environment']),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Bible Studies & Theology', 'In-depth study of the Bible and theology for ministry and personal growth.', '1 year', ARRAY['KCSE Certificate', 'Interest in theology']),
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Certificate in HIV & HIV Counselling & Testing', 'Short course for HIV counselling and testing skills.', '3 months', ARRAY['KCSE Certificate']),
('dddddddd-dddd-dddd-dddd-dddddddddddd', 'Computer Packages', 'Short course in essential computer packages for all careers.', '3 months', ARRAY['KCSE Certificate']),
('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'Home Management & Basic Caregiving', 'Skills for home management and caregiving for families and communities.', '3 months', ARRAY['KCSE Certificate']),
('ffffffff-ffff-ffff-ffff-ffffffffffff', 'Basic Literacy, Theology & Biblical Studies', 'Foundational literacy and biblical studies for all ages.', '3 months', ARRAY['Open to all']),
('00000000-0000-0000-0000-000000000000', 'Kenyan Sign Language', 'Learn Kenyan Sign Language for communication and inclusion.', '3 months', ARRAY['Open to all'])
ON CONFLICT (title) DO NOTHING;



INSERT INTO courses (id, title, description, duration, requirements)
VALUES
('10000000-0000-0000-0000-000000000000', 'Diploma in Dental Nursing', 'Tailored for practicing or qualified nurses seeking to specialize in dental care.', '2 years', ARRAY['KCSE Certificate', 'Interest in dental care']),
('10101010-1010-1010-1010-101010101010', 'Certificate in Chairside Dental Assisting', 'Equips learners with practical skills to assist dental professionals effectively.', '1 year', ARRAY['KCSE Certificate', 'Interest in dental care']),
('10210210-2102-1021-0210-210210210210', 'Certificate in Ultrasound Technology', 'Hands-on course ideal for those interested in diagnostic imaging using ultrasound.', '1 year', ARRAY['KCSE Certificate', 'Interest in health sciences']),
('10310310-3103-1031-0310-310310310310', 'Certificate in Emergency X-ray Technology', 'Trains professionals in conducting X-ray imaging in emergency and clinical settings.', '1 year', ARRAY['KCSE Certificate', 'Interest in health sciences'])
ON CONFLICT (title) DO NOTHING;
