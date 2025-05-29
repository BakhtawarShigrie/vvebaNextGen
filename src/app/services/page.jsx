import {PageBreadcrumb} from '@/shared/components/common/breadcrumb';
import {ServicesArea} from '@/shared/components/services';

export default () => {
  return (
    <>
      <PageBreadcrumb
        title={'Services'}
        paths={[
          {title: 'Home', href: '/'},
          {title: 'Services', href: '/services'},
        ]}
      />
      <ServicesArea />
    </>
  );
};
