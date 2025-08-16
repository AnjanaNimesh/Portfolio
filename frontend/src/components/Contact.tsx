import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import AnimatedSection from './AnimatedSection';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Get base URL from environment variable and append the endpoint
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      const contactUrl = `${baseUrl}/api/contact`;

      const response = await fetch(contactUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError('');
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <MailIcon size={24} />,
      title: 'Email',
      value: 'anjananimesh22@gmail.com',
      link: 'mailto:anjananimesh22@gmail.com',
    },
    {
      icon: <PhoneIcon size={24} />,
      title: 'Phone',
      value: '+94 71 328 8667',
    },
    {
      icon: <MapPinIcon size={24} />,
      title: 'Location',
      value: 'Moratuwa, Sri Lanka',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Get In Touch"
            className="text-3xl md:text-4xl font-bold mb-2"
          />
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: '80px',
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-1 bg-yellow-500 mx-auto"
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-start group"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 mr-4 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{info.title}</h4>
                      <p className="text-gray-400 group-hover:text-yellow-500 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/AnjanaNimesh"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anjana-nimesh-8801a8271/"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.520-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://medium.com/@anjana.n.sathsara.j.k.d"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 1043.63 592.71"
                    >
                      <g data-name="Layer 1">
                        <path d="M588.67 296.35c0 163.7-131.56 296.35-294.34 296.35S0 460.05 0 296.35 131.56 0 294.33 0s294.34 132.65 294.34 296.35M811.14 296.35c0 154.47-65.78 279.66-146.92 279.66s-146.92-125.19-146.92-279.66S583.08 16.69 664.22 16.69s146.92 125.18 146.92 279.66M1043.63 296.35c0 144.14-29.39 260.99-65.63 260.99s-65.62-116.85-65.62-260.99 29.39-260.99 65.62-260.99 65.63 116.85 65.63 260.99"/>
                      </g>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-2" direction="right">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="text-right">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className={`px-8 py-3 rounded-full flex items-center justify-center ${isSubmitting ? 'bg-gray-700 text-gray-300' : 'bg-yellow-500 text-black hover:bg-yellow-400'} transition-colors font-medium`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <SendIcon size={18} className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </div>
                {submitSuccess && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-4 p-3 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg text-center"
                  >
                    Your message has been sent successfully!
                  </motion.div>
                )}
                {submitError && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-4 p-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg text-center"
                  >
                    {submitError}
                  </motion.div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;