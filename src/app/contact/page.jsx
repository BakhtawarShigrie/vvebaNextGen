import { PageBreadcrumb } from '@/shared/components/common/breadcrumb';
import { Contact } from '@/shared/components/contact';
export default () => {
    return (
        <>
            <PageBreadcrumb
                title={'Contact Us'}
                paths={[
                    { title: 'Home', href: '/' },
                    { title: 'Contact Us', href: '/contact' },
                ]}
            />
            <Contact />
        </>
    );
};



