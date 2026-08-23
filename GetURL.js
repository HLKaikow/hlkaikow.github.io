	function GetURL(local)
		{
			return local;
		}

	(function () {
		function addHowardNotice() {
			var path = window.location.pathname.toLowerCase();
			if (path === "/" || path === "/index.html") {
				return;
			}

			if (!document.body || document.getElementById("howard-kaikow-notice")) {
				return;
			}

			var notice = document.createElement("div");
			notice.id = "howard-kaikow-notice";
			notice.style.border = "1px solid #d69e2e";
			notice.style.background = "#fdf6e3";
			notice.style.color = "#1f2933";
			notice.style.fontFamily = "Arial, Helvetica, sans-serif";
			notice.style.fontSize = "14px";
			notice.style.lineHeight = "1.45";
			notice.style.margin = "12px";
			notice.style.padding = "10px 12px";
			notice.innerHTML = '<b>Important notice:</b> Howard Kaikow passed away on April 1, 2011. This site remains available as a historical archive. For Howard-related communication: <a href="mailto:hkaikow@gmail.com">hkaikow@gmail.com</a>.';

			document.body.insertBefore(notice, document.body.firstChild);
		}

		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", addHowardNotice);
		} else {
			addHowardNotice();
		}
	}());
