import Script from "next/script";

const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// The IDs are interpolated into inline scripts, so only accept plain numbers.
const isNumericId = (id) => /^\d+$/.test(id ?? "");

// LinkedIn Insight Tag and Meta Pixel for the webinar pages. Each one only
// loads when its env var is set.
export default function TrackingPixels() {
  return (
    <>
      {isNumericId(linkedInPartnerId) && (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push("${linkedInPartnerId}");
            (function(l) {
              if (!l) { window.lintrk = function(a, b) { window.lintrk.q.push([a, b]) }; window.lintrk.q = [] }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      )}
      {isNumericId(metaPixelId) && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
