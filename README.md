# ragemp-animwheel
An animation wheel for RageMP (GTA V). The GUI is inspired by the in-game radio wheel.

#
## How it works
The server holds a list of objects that define the wheel, e.g.
```javascript
{
    "slot": 1,
    "animation": "sit",
    "category": "Sitting"
}
```

When a player joins the server, the server provides the client with said list, then the client claims responsibility for maintaining it (i.e. notify the server on changes).

The CEF wheel generator code can deal with <b>any number of items</b>. To maintain the circular look, you should enforce a minimum of 5 items.

The client and the CEF depend on <b>rage-rpc</b> for two-way communications. However, if you can't use rage-rpc, you can implement the IAnimationDataProvider interface. For now, this repository only provides a RageRpcAnimationDataProvider.

#
## How to add this package to your existing gamemode
* Clone this git repository
* Copy `.\dist\client_packages\rage-rpc` and `.\dist\client_packages\animwheel` to your server's `client_packages` folder
* Update your server's `client_packages\index.js` to require rage-rpc and  animwheel
* In your server code, register the next events:
    * PlayAnimation
        ```
        --- PlayAnimation(animationName: string)
        This is the event that the client triggers when a user clicked a wheel item.
        
        The animationName string is the text that is displayed in the wheel. It is determined by the list that was sent to the client when it joined.
        ```
    * UpdateFavoriteAnimation
        ```
        --- UpdateFavoriteAnimation(slot: number, animationName: string)
        This is the event that the client triggers when a user attempts to edit a wheel item.

        The slot number is not necessarily an array index - it only affects the order of items on the user's wheel. It is determined by the list that was sent to the client when it joined.

        To inform the client of the outcome, you must do one of the following:
        1) FAILURE: Invoke the client rage event 
           'UpdateFavoriteAnimation_Failed' with the animation name as a 
           parameter.
        2) SUCCESS: Invoke the client rage event
           'UpdateFavoriteAnimation_Success' with (slot, newAnimationName, newCategoryName) as parameters.
        
        The client will display a loading animation while waiting for one of those events.
        ```

* In your server code, handle the rage event `playerJoin` to set the client's wheel slots
    ```
    Invoke the client rage event 'SetFavoriteAnimations' with a list of
    AnimwheelSlot objects:

    {
        "slot": number,
        "animation": string,  /* Animation name to display to the user */
        "category": string    /* Category - determines the icon */
    }
    ```

You can see server-code implementation examples in the repository's `.\src\server-side` folder. It's not recommended to use this code as-is, because it does not support advanced RAGE animation features, such as animating with objects.

#
## Editing the icons
The icon files reside in `.\src\cef\assets\img\categories` as svg files. File names are `<category>.svg` and you can simply change an existing file, or add a new one to support a new category.

If you need more customization, you can make changes to the `getIconForCategory` method in `.\src\client-side\cef\js\animwheel-ui.ts`


#
## Changing the source - compiling .\src to .\dist
In the case that you need to make changes to the TypeScript source:
* Open a terminal and run
    ```
    cd .\src
    npm install
    ```
* Edit whatever files in the `.\src` folder
* Run the following batch script: `.\compile_all.bat`. If all goes well, you'll now have everything in the `.\dist` folder.

#
## Special thanks
* The GTA World community (https://gta.world) for providing me with a list of animations and the specifications for this feature.
* The brilliant rage-rpc package (https://github.com/micaww/rage-rpc) for making the remote process communications with the CEF a piece of cake.