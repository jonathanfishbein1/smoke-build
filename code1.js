gdjs.TitleCode = {};
gdjs.TitleCode.GDBackgroundObjects1= [];
gdjs.TitleCode.GDBackgroundObjects2= [];
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDInstruction1Objects1= [];
gdjs.TitleCode.GDInstruction1Objects2= [];
gdjs.TitleCode.GDInstruction2Objects1= [];
gdjs.TitleCode.GDInstruction2Objects2= [];
gdjs.TitleCode.GDNewObject3Objects1= [];
gdjs.TitleCode.GDNewObject3Objects2= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Phase1", true);
}}

}


};gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "");
if (isConditionTrue_0) {

{ //Subevents
gdjs.TitleCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDBackgroundObjects1.length = 0;
gdjs.TitleCode.GDBackgroundObjects2.length = 0;
gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDInstruction1Objects1.length = 0;
gdjs.TitleCode.GDInstruction1Objects2.length = 0;
gdjs.TitleCode.GDInstruction2Objects1.length = 0;
gdjs.TitleCode.GDInstruction2Objects2.length = 0;
gdjs.TitleCode.GDNewObject3Objects1.length = 0;
gdjs.TitleCode.GDNewObject3Objects2.length = 0;

gdjs.TitleCode.eventsList1(runtimeScene);

return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
