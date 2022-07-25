export function GetSvgIcon(type: string) {
  switch (type) {
    case "circle":
      return (
        <div className="field-tab">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20%"
            viewBox="0 0 120 120"
            enable-background="new 0 0 120 120"
          >
            <circle cx="60" cy="60.834" r="54.167" />
          </svg>
        </div>
      );
  }
}
