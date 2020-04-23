import {AnimData, AnimCategories} from "./models/anim-data.type";
import { AnimationFlags } from './enums/animation-flags.enum';

// This is the main list that contains all animations
export const AllAnimations = [
    //Sitting
    new AnimData("sit", AnimCategories.Sitting, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "switch@michael@sitting", "idle"),
    new AnimData("sit2", AnimCategories.Sitting, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_stupor@male@base", "base"),
    new AnimData("sit3", AnimCategories.Sitting, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "timetable@michael@on_sofaidle_a", "sit_sofa_a"),
    new AnimData("sidesit", AnimCategories.Sitting,-1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_picnic@female@base", "base"),
    new AnimData("desksit1", AnimCategories.Sitting, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "timetable@amanda@ig_12", "amanda_idle_a"),
    new AnimData("desksit2", AnimCategories.Sitting, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "switch@michael@around_the_table_selfish", "around_the_table_selfish_exit_loop_jimmy"),
    new AnimData("toiletsit", AnimCategories.Sitting, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "anim@heists@heist_safehouse_intro@phone_couch@male", "phone_couch_male_idle"),
    new AnimData("weepingsit", AnimCategories.Sitting, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "timetable@tracy@ig_1@base", "base"),
    new AnimData("sitchair", AnimCategories.Sitting, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "safe@franklin@ig_13", "blunt_base"),
    new AnimData("sitchair2", AnimCategories.Sitting, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "timetable@denice@ig_4", "base"),
 
    //Laying
    new AnimData("liedown1", AnimCategories.Laying, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.AllowPlayerControl), "amb@world_human_sit_ups@male@enter", "enter"),
    new AnimData("liedown5", AnimCategories.Laying, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.AllowPlayerControl), "amb@world_human_sunbathe@male@back@enter", "enter"),
    new AnimData("layleft", AnimCategories.Laying, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_bum_slumped@male@laying_on_left_side@base", "base"),
    new AnimData("layright", AnimCategories.Laying, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_bum_slumped@male@laying_on_right_side@base", "base"),
    new AnimData("laydead", AnimCategories.Laying, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "misssolomon_5@end", "dead_black_ops"),
    new AnimData("laycouch", AnimCategories.Laying, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@prop_human_seat_sunlounger@female@base", "base", true, new mp.Vector3(0.0, 0.0, -0.92)),
    new AnimData("sunbatheback", AnimCategories.Laying, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_sunbathe@female@back@base", "base"),


    //Standing
    new AnimData("bumsign1", AnimCategories.Standing, -1109340972, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_bum_freeway@male@idle_a", "idle_a"),
    new AnimData("bumsign2", AnimCategories.Standing, -801803927, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_bum_freeway@male@idle_a", "idle_b"),
    new AnimData("bumsign3", AnimCategories.Standing, -245386275, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_bum_freeway@male@idle_a", "idle_c"),
    new AnimData("bumcart", AnimCategories.Standing, 1395334609, "IK_Root", new mp.Vector3(0.0, 1.0, -0.455), new mp.Vector3(0.0, 0.0, 180.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@prop_human_bum_shopping_cart@male@idle_a", "idle_a"),
    new AnimData("bumcart1", AnimCategories.Standing, 1395334609, "IK_Root", new mp.Vector3(0.0, 1.0, -0.455), new mp.Vector3(0.0, 0.0, 180.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@prop_human_bum_shopping_cart@male@idle_a", "idle_b"),

    //Food
    new AnimData("walkdrink", AnimCategories.Food, -163314598, "PH_R_Hand", new mp.Vector3(0.0, 0.0, -0.1), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@code_human_wander_drinking@male@idle_a", "idle_c"),
    new AnimData("walkdrink2", AnimCategories.Food,144995201, "PH_R_Hand", new mp.Vector3(0.0, 0.0, -0.1), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl | AnimationFlags.OnlyAnimateUpperBody), "amb@code_human_wander_drinking@male@idle_a", "idle_a"),
    new AnimData("walkeat1", AnimCategories.Food,-2054442544, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@code_human_wander_eating_donut@male@idle_a", "idle_c"),
    new AnimData("walkeat2", AnimCategories.Food,-2054442544, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@code_human_wander_eating_donut@male@idle_a", "idle_b"),
    new AnimData("walkeat3", AnimCategories.Food,1655278098, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl | AnimationFlags.OnlyAnimateUpperBody), "amb@code_human_wander_eating_donut@male@idle_a", "idle_a"),
    new AnimData("coffee1", AnimCategories.Food,-163314598, "PH_R_Hand", new mp.Vector3(0.0, 0.0, -0.1), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_aa_coffee@idle_a", "idle_a"),
 
    //Expressions
    new AnimData("finger", AnimCategories.Expressions, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "mp_player_intfinger", "mp_player_int_finger"),
    new AnimData("fuck", AnimCategories.Expressions, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), 0, "anim@mp_player_intupperfinger", "enter_fp"),
    new AnimData("crackhands", AnimCategories.Expressions, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), 0, "anim@mp_player_intupperknuckle_crunch", "idle_a"),

    //Working
    new AnimData("jackhammer", AnimCategories.Working, 1360563376, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_const_drill@male@drill@base", "base"),
    new AnimData("hammer", AnimCategories.Working, -127739306, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_hammering@male@base", "base"),
    new AnimData("mechanic", AnimCategories.Working, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "amb@world_human_vehicle_mechanic@male@base", "base"),

    //Phone
    new AnimData("phone1", AnimCategories.Phone, 94130617, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_mobile_film_shocking@female@idle_a", "idle_a"),
    new AnimData("takepic", AnimCategories.Phone, 94130617, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl | AnimationFlags.StopOnLastFrame), "cellphone@self", "selfie_in"),
    new AnimData("texting", AnimCategories.Phone, 94130617, "PH_R_Hand", new mp.Vector3(-0.05, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "amb@code_human_wander_texting@female@base", "static"),
    
    //Ground
    new AnimData("sitground", AnimCategories.Ground,-1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "rcm_barry3", "barry_3_sit_loop"),
    new AnimData("sitground2", AnimCategories.Ground,-1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_picnic@male@base", "base"),
   
    //Leaning
    new AnimData("lean", AnimCategories.Leaning, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_leaning@male@wall@back@hands_together@idle_a", "idle_a"),
    new AnimData("leanfoot", AnimCategories.Leaning, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_leaning@male@wall@back@foot_up@idle_a", "idle_a"),
    new AnimData("leancar", AnimCategories.Leaning, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "switch@michael@sitting_on_car_bonnet", "sitting_on_car_bonnet_loop"),
    new AnimData("leanrail", AnimCategories.Leaning, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "missstrip_club_lean", "player_lean_rail_loop"),
    new AnimData("leanrailsmoking", AnimCategories.Leaning, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "missfbi3_sniping", "smoke_b"),
    new AnimData("sidelean", AnimCategories.Leaning, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "mp_cop_tutdealer_leaning@base", "base"),
    new AnimData("sidelean1", AnimCategories.Leaning, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "mp_cop_tutdealer_leaning@idle_a", "idle_b"),
    new AnimData("sidelean2", AnimCategories.Leaning, -1, "null", new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "mp_cop_tutdealer_leaning@idle_b", "idle_d"),
    
    //Surrender
    new AnimData("handsup", AnimCategories.Surrender, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "missfbi5ig_20b", "hands_up_scientist"),
    new AnimData("handsup2", AnimCategories.Surrender, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl | AnimationFlags.OnlyAnimateUpperBody), "missminuteman_1ig_2", "handsup_base"),
    new AnimData("handsupknees", AnimCategories.Surrender, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "busted", "idle_b"),
    new AnimData("handsupknees2", AnimCategories.Surrender, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "random@arrests", "kneeling_arrest_idle"),
    new AnimData("cowerhide", AnimCategories.Surrender, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "amb@code_human_cower@female@base", "base"),
    new AnimData("cowerlook1", AnimCategories.Surrender, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "amb@code_human_cower@female@idle_a", "idle_a"),
    
    //Social
    new AnimData("point", AnimCategories.Social, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "oddjobs@suicide", "bystander_pointinto"),
    new AnimData("pushups", AnimCategories.Social, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_push_ups@male@idle_a", "idle_d"),
    new AnimData("crunches", AnimCategories.Social, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_sit_ups@male@base", "base"),
    new AnimData("chinups", AnimCategories.Social, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@prop_human_muscle_chin_ups@male@base", "base"),
    new AnimData("guitar", AnimCategories.Social,-708789241, "PH_L_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_musician@guitar@male@idle_a", "idle_b"),
    new AnimData("drums", AnimCategories.Social,591916419, "PH_L_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_musician@bongos@male@idle_a", "idle_a"),
    new AnimData("yoga1", AnimCategories.Social, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_yoga@female@base", "base_b"),
    new AnimData("beltgrab", AnimCategories.Social, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "amb@world_human_cop_idles@male@base", "base"),
    new AnimData("hangout", AnimCategories.Social, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "amb@world_human_hang_out_street@male_b@idle_a", "idle_b"),
    new AnimData("partydance", AnimCategories.Social, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "amb@world_human_partying@female@partying_beer@base", "base"),
    new AnimData("guitar1", AnimCategories.Social, -1528307545, "PH_L_Hand", new mp.Vector3(0.0, -0.03, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_musician@guitar@male@idle_a", "idle_b"),
    
    //Adult
    new AnimData("fuckyou", AnimCategories.Adult, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), 0, "anim@mp_player_intupperdock", "exit_fp"),
    new AnimData("twerk", AnimCategories.Adult, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "switch@trevor@mocks_lapdance", "001443_01_trvs_28_idle_stripper"),
    new AnimData("stripdance11", AnimCategories.Adult,-1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "switch@trevor@mocks_lapdance", "001443_01_trvs_28_exit_stripper"),
    new AnimData("stripperidle1", AnimCategories.Adult, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "mini@strip_club@idles@stripper", "stripper_idle_01"),
    new AnimData("stripdance1", AnimCategories.Adult, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "mini@strip_club@lap_dance@ld_girl_a_song_a_p1", "ld_girl_a_song_a_p1_f"),
    new AnimData("stripdance2", AnimCategories.Adult, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "mini@strip_club@lap_dance@ld_girl_a_song_a_p2", "ld_girl_a_song_a_p2_f"),
    new AnimData("stripdance3", AnimCategories.Adult, -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "mini@strip_club@lap_dance@ld_girl_a_song_a_p3", "ld_girl_a_song_a_p3_f"),
    
    //Items
    new AnimData("smoke1", AnimCategories.Items, 175300549, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_aa_smoke@male@idle_a", "idle_a"),
    new AnimData("smoke2", AnimCategories.Items,175300549, "PH_R_Hand", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "amb@world_human_leaning@female@smoke@idle_a", "idle_a"),
    
    //Gestures
    new AnimData("bringiton", AnimCategories.Gestures, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "gestures@m@car@std@casual@ps", "gesture_bring_it_on"),
    new AnimData("damn", AnimCategories.Gestures, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "gestures@m@car@std@casual@ps", "gesture_damn"),
    new AnimData("shakehead", AnimCategories.Gestures, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "gestures@m@car@std@casual@ps", "gesture_displeased"),

    //Fighting
    new AnimData("hitfall1", AnimCategories.Fighting, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "melee@knife@streamed_core_fps", "victim_knife_front_takedown"),
    new AnimData("hitfall2", AnimCategories.Fighting, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "melee@knife@streamed_core_fps", "victim_knife_front_takedown_variation_a"),
    new AnimData("lowkick", AnimCategories.Fighting, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "melee@knife@streamed_variations", "ground_attack_on_spot_var_a"),
    new AnimData("meleehitground", AnimCategories.Fighting, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "melee@large_wpn@streamed_core", "ground_attack_on_spot"),
    new AnimData("middlekick", AnimCategories.Fighting, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "melee@small_wpn@streamed_core", "low_attack_0"),
    new AnimData("shoved", AnimCategories.Fighting, -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.AllowPlayerControl), "melee@small_wpn@streamed_core_fps", "non_melee_damage_front")
];
