import { LANDING_SECTION_DATA, RESUME_DOWNLOAD, SOCIAL_ICONS } from '@/config';
import React, { useState } from 'react';
import { Download, FileText, File, Moon, Sun } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/Dailog';

const ResumeOption = ({ icon: Icon, title, subtitle, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-800 transition-colors w-full text-left group"
    >
        <div className="p-2 rounded-full bg-site-orange bg-opacity-10 group-hover:bg-opacity-20 transition-all">
            <Icon className="w-6 h-6 text-site-orange group-hover:scale-110 transition-transform" />
        </div>
        <div>
            <h3 className="text-md text-slate-900 group-hover:text-site-orange transition-colors">{title}</h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{subtitle}</p>
        </div>
    </button>
);

const Landing_section: React.FC = () => {
    const { greeting, description, socialLinks } = LANDING_SECTION_DATA;
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = () => {
        const fileName = RESUME_DOWNLOAD.fileName;
        const downloadAs = RESUME_DOWNLOAD.downloadAs ?? fileName;
        const filePath = `${import.meta.env.BASE_URL}/resumes/${fileName}`;
        const link = document.createElement('a');
        link.href = filePath;
        link.download = downloadAs;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsOpen(false);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 bg-site-bg">
            <div className="space-y-5">
                <p className="font-mono text-site-orange text-[13px] md:text-lg pt-16 md:pt-0">
                    {greeting.preTitle}
                </p>

                {/* <h1 className="font-calibre font-semibold text-[40px] md:text-7xl text-slate-300">
                    {greeting.name}
                </h1> */}
                <p className="font-calibre font-medium text-[22px] md:text-3xl text-slate-400 -mt-1">
                    {greeting.fullname}
                </p>

                <h2 className="flex items-center font-calibre font-bold text-[40px] md:text-6xl text-site-orange">
                    {greeting.title}
                    <span className="ml-4">
                        <span role="img" aria-label={greeting.emoji.ariaLabel} className="text-4xl">
                            {greeting.emoji.symbol}
                        </span>
                    </span>
                </h2>

                <p className="font-calibre font-thin text-[18px] md:text-[20px] text-slate-300 max-w-[500px]">
                    {description}
                </p>

                <div className="flex items-center gap-6">


                    <div className='flex gap-3 md:hidden'>
                        <a
                            href={socialLinks.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-site-orange" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.github} />
                            </svg>
                        </a>
                        <a
                            href={socialLinks.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-site-orange" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.linkedin} />
                            </svg>
                        </a>
                        <a
                            href={`mailto:${socialLinks.email.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-site-orange" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.email} />
                            </svg>
                        </a>
                    </div>
                     <button onClick={() => handleDownload('pdf', 'light')} className="inline-flex items-center gap-2 rounded p-2 md:px-6 md:py-3 font-mono text-sm text-site-orange border border-site-orange rounded hover:bg-site-orange hover:bg-opacity-10 transition-all duration-300">
                                <Download size={16} />
                                <span className='hidden md:inline'>Download Resume</span>
                            </button>
                    {/* <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <button className="inline-flex items-center gap-2 rounded p-2 md:px-6 md:py-3 font-mono text-sm text-site-accent border border-site-accent rounded hover:bg-site-accent hover:bg-opacity-10 transition-all duration-300">
                                <Download size={16} />
                                <span className='hidden md:inline'>Download Resume</span>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Download Resume</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-1 gap-2">
                                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">PDF Format</h3>
                                    <ResumeOption
                                        icon={FileText}
                                        title="Light Theme PDF"
                                        subtitle="Professional light theme for standard printing"
                                        onClick={() => handleDownload('pdf', 'light')}
                                    />
                                    <ResumeOption
                                        icon={Moon}
                                        title="Dark Theme PDF"
                                        subtitle="Modern dark theme for digital viewing"
                                        onClick={() => handleDownload('pdf', 'dark')}
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Word Format</h3>
                                    <ResumeOption
                                        icon={File}
                                        title="Light Theme DOCX"
                                        subtitle="Editable format for ATS systems"
                                        onClick={() => handleDownload('docx', 'light')}
                                    />
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog> */}
                </div>
            </div>
        </section>
    );
};

export default Landing_section;