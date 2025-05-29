'use client';
import {useRouter} from 'next/navigation';

export const PageBreadcrumb = ({title, paths}) => {
  const router = useRouter();
  return (
    <section className="breadcrumb__area pt-100 pb-110 mt-170 p-relative z-index-1 fix">
      <div className="breadcrumb__bg"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="breadcrumb__content">
              <h3 className="breadcrumb__title">{title}</h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="breadcrumb__content">
              <div className="breadcrumb__list text-center text-sm-end">
                {paths?.map((path, index) => {
                  return (
                    <>
                      <span>
                        <a
                          onClick={() => router.push(path.href)}
                          href={'javascript://'}
                        >
                          {path.title}
                        </a>
                      </span>
                      <span
                        className="dvdr"
                        style={{display: index == paths.length - 1 && 'none'}}
                      >
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
