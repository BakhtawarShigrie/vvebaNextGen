import { PageBreadcrumb } from '@/shared/components/common/breadcrumb';
import { About } from '@/shared/components/about';
export default () => {
    return (
        <>
            <PageBreadcrumb
                title={'About'}
                paths={[
                    { title: 'Home', href: '/' },
                    { title: 'About', href: '/about' },
                ]}
            />
            <About />
        </>
    );
};



