

export default function footer() {
    return (
        <div>
            <h3>Contacts</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className="w-full h-[300px]">
                <iframe src="https://www.google.com/maps/embed?pb=!4v1743389752590!6m8!1m7!1shvRKypQ05Myr1cG-iPug1w!2m2!1d40.75266383498745!2d-73.57150555687983!3f344.49!4f0!5f0.7820865974627469"
                 width="100%" 
                 height="100%" 
                 style={{border: 0}}
                 allowFullScreen
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                <div>working hours</div>
                <div>social media/(516) 779-1659</div>
            </div>
        </div>
    )
}