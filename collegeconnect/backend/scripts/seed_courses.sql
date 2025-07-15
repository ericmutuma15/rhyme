ALTER TABLE courses ADD CONSTRAINT unique_title UNIQUE (title);

INSERT INTO courses (title, description, duration, requirements) VALUES
('Community Health & HIV/AIDS Management', 'Comprehensive training in community health and HIV/AIDS management for aspiring health workers.', '1 year', ARRAY['KCSE Certificate', 'Interest in health sciences']),
('Nutrition & Dietetics', 'Learn the science of nutrition and diet planning for wellness and disease prevention.', '1 year', ARRAY['KCSE Certificate', 'Interest in nutrition']),
('Community Health & Development', 'Develop skills for community health improvement and sustainable development.', '1 year', ARRAY['KCSE Certificate', 'Passion for community work']),
('Dental Assistant Technology', 'Hands-on training for dental clinic support roles and patient care.', '1 year', ARRAY['KCSE Certificate', 'Interest in dental care']),
('Business Management', 'Practical business management skills for entrepreneurs and professionals.', '1 year', ARRAY['KCSE Certificate', 'Interest in business']),
('Computer Applications', 'Essential computer skills for the modern workplace.', '6 months', ARRAY['KCSE Certificate', 'Basic computer literacy']),
('Water Technology & Plumbing', 'Technical training in water systems and plumbing for infrastructure development.', '1 year', ARRAY['KCSE Certificate', 'Interest in technical trades']),
('First Aid, Home-Based Care & Drug Addiction Intervention', 'Skills for emergency response, caregiving, and addiction support.', '6 months', ARRAY['KCSE Certificate', 'Interest in caregiving']),
('Food & Beverage', 'Training in food preparation, safety, and service for hospitality careers.', '1 year', ARRAY['KCSE Certificate', 'Interest in hospitality']),
('Environment, Climate Change & Health', 'Study the impact of environment and climate on health and wellness.', '1 year', ARRAY['KCSE Certificate', 'Interest in environment']),
('Bible Studies & Theology', 'In-depth study of the Bible and theology for ministry and personal growth.', '1 year', ARRAY['KCSE Certificate', 'Interest in theology']),
('Certificate in HIV & HIV Counselling & Testing', 'Short course for HIV counselling and testing skills.', '3 months', ARRAY['KCSE Certificate']),
('Computer Packages', 'Short course in essential computer packages for all careers.', '3 months', ARRAY['KCSE Certificate']),
('Home Management & Basic Caregiving', 'Skills for home management and caregiving for families and communities.', '3 months', ARRAY['KCSE Certificate']),
('Basic Literacy, Theology & Biblical Studies', 'Foundational literacy and biblical studies for all ages.', '3 months', ARRAY['Open to all']),
('Kenyan Sign Language', 'Learn Kenyan Sign Language for communication and inclusion.', '3 months', ARRAY['Open to all'])
ON CONFLICT (title) DO NOTHING;

-- New Courses Now Offered
INSERT INTO courses (title, description, duration, requirements)
VALUES
('Diploma in Dental Nursing', 'Tailored for practicing or qualified nurses seeking to specialize in dental care.', '2 years', ARRAY['KCSE Certificate', 'Interest in dental care']),
('Certificate in Chairside Dental Assisting', 'Equips learners with practical skills to assist dental professionals effectively.', '1 year', ARRAY['KCSE Certificate', 'Interest in dental care']),
('Certificate in Ultrasound Technology', 'Hands-on course ideal for those interested in diagnostic imaging using ultrasound.', '1 year', ARRAY['KCSE Certificate', 'Interest in health sciences']),
('Certificate in Emergency X-ray Technology', 'Trains professionals in conducting X-ray imaging in emergency and clinical settings.', '1 year', ARRAY['KCSE Certificate', 'Interest in health sciences'])
ON CONFLICT (title) DO NOTHING;
