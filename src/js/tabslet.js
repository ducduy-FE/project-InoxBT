
export function tabsletInit() {
  $(".tabslet-header").tabslet({
    active: 1,
    mouseevent: "click",
    attribute: "href",
    animation: true,
  });
  $(".tabslet").tabslet({
    active: 1,
  });
}
