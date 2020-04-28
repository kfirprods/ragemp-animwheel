/* The key that lets players toggle the visibility of the animation wheel */
export const TOGGLE_ANIMWHEEL_KEY = 0x55; // U key

/* The key that lets players exit the animation name editor (in addition to clicking 'Cancel' with the mouse) */
export const CLOSE_EDITOR_KEY = 0x1B; // Escape key

/* The path where you'll put animwheel in client_packages, relative to the "client_packages" folder itself.
   Example: 
       You have a gamemode named "LameRP" and by convention you locate all client packages under client_packages\LameRP.
       In that case, change the value to LameRP/animwheel */
export const CLIENT_PACKAGE_ROOT_PATH = "animwheel";
