/////////////////////////////////////////////////////////////////////
//Lichter Mom
on({ id: 'hue.0.Mom_Deckenlicht.on' }, function (obj) {
        setState('hm-rpc.0.KEQ0633553.1.STATE', true);
});
//Schalter
on({ id: 'hm-rpc.0.KEQ0181151.1.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Mom.allOn').val;
    if (onOff) {
        setState('hue.0.Mom.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Mom.allOn', true);
    }
});
on({ id: 'hm-rpc.0.KEQ0181151.2.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Wandschrank_Mom.allOn').val;
    if (onOff) {
        setState('hue.0.Wandschrank_Mom.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Wandschrank_Mom.allOn', true);
    }
});
on({ id: 'hm-rpc.0.KEQ0181151.3.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Mom_Tisch_1.allOn').val;
    if (onOff) {
        setState('hue.0.Mom_Tisch_1.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Mom_Tisch_1.allOn', true);
    }
});
on({ id: 'hm-rpc.0.KEQ0181151.4.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Mom_Tisch2_Room.allOn').val;
    if (onOff) {
        setState('hue.0.Mom_Tisch2_Room.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Mom_Tisch2_Room.allOn', true);
    }
});
on({ id: 'hm-rpc.0.KEQ0181151.5.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Mom_Deckenlicht.on').val;
    if (onOff) {
        setState('hue.0.Mom_Deckenlicht.on', false);
    } else if (!onOff) {
        setState('hue.0.Mom_Deckenlicht.on', true);
    }
});
/////////////////////////////////////////////////////////////////////////////////////
//Alle licher
on({ id: 'hue.0.All.allOn' }, function (obj) {
    let onOff = getState('hue.0.All.allOn').val;
    if (onOff) {
        setState('hm-rpc.0.KEQ1074230.1.STATE', true);
        setState('hm-rpc.0.JEQ0682692.2.STATE', true);
    } else if (!onOff) {
        setState('hm-rpc.0.KEQ1074230.1.STATE', false);
        setState('hm-rpc.0.JEQ0682692.2.STATE', false);
    }
});
/////////////////////////////////////////////////////////////////////////////////////
//Lichter Büro
on({ id: 'hm-rpc.0.REQ1389626.2.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Büro.allOn').val;
    if (onOff) {
        setState('hue.0.Büro.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Büro.allOn', true);
    }
});
on({ id: 'hm-rpc.0.REQ1389626.1.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Büro.allOn').val;
    if (onOff) {
        setState('hue.0.Büro.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Büro.allOn', true);
    }
});
/////////////////////////////////////////////////////////////////////////////////////
//Lichter Gang
on({ id: 'hm-rpc.0.REQ1389536.2.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Flur.allOn').val;
    if (onOff) {
        setState('hue.0.All.allOn', false);
    } else if (!onOff) {
        setState('hue.0.All.allOn', true);
    }
});
on({ id: 'hm-rpc.0.REQ1389536.1.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Flur.allOn').val;
    if (onOff) {
        setState('hue.0.Flur.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Flur.allOn', true);
    }
});
on({ id: 'hm-rpc.0.REQ1389523.1.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Flur.allOn').val;
    if (onOff) {
        setState('hue.0.Flur.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Flur.allOn', true);
    }
});
on({ id: 'hm-rpc.0.REQ1389523.2.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Flur.allOn').val;
    if (onOff) {
        setState('hue.0.Flur.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Flur.allOn', true);
    }
});
/////////////////////////////////////////////////////////////////////////////////////
//Lichter Wintergarten
on({ id: 'hm-rpc.0.KEQ0181116.1.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Esszimmer.allOn').val;
    if (onOff) {
        setState('hue.0.Esszimmer.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Esszimmer.allOn', true);
    }
});
on({ id: 'hm-rpc.0.KEQ0181116.2.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hm-rpc.0.JEQ0682692.2.STATE').val;
    if (onOff) {
        setState('hm-rpc.0.JEQ0682692.2.STATE', false);
    } else if (!onOff) {
        setState('hm-rpc.0.JEQ0682692.2.STATE', true);
    }
});
on({ id: 'hm-rpc.0.KEQ0181116.3.PRESS_SHORT' }, function (obj) {
    setState('hm-rpc.0.KEQ0540920.1.LEVEL', 0);
});
on({ id: 'hm-rpc.0.KEQ0181116.4.PRESS_SHORT' }, function (obj) {
    setState('hm-rpc.0.KEQ0540920.1.LEVEL', 100);
});
/////////////////////////////////////////////////////////////////////////////////////
//Lichter Wohnzimmer¨
on({ id: 'hm-rpc.0.MEQ0530387.1.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Wohnzimmer.allOn').val;
    if (onOff) {
        setState('hue.0.Wohnzimmer.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Wohnzimmer.allOn', true);
    }
});
on({ id: 'hm-rpc.0.MEQ0530387.2.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Flur.allOn').val;
    if (onOff) {
        setState('hue.0.Flur.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Flur.allOn', true);
    }
});
on({ id: 'hm-rpc.0.MEQ0530387.3.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Wohnzimmer_Stehlicht.on').val;
    if (onOff) {
        setState('hue.0.Wohnzimmer_Stehlicht.on', false);
    } else if (!onOff) {
        setState('hue.0.Wohnzimmer_Stehlicht.on', true);
    }
});
on({ id: 'hm-rpc.0.MEQ0530387.4.PRESS_SHORT' }, function (obj) {
    let onOff = getState('hue.0.Wohnzimmer_2.on').val;
    if (onOff) {
        setState('hue.0.Wohnzimmer_2.on', false);
    } else if (!onOff) {
        setState('hue.0.Wohnzimmer_2.on', true);
    }
});
/////////////////////////////////////////////////////////////////////////////////////
//Lichter Raphi
on({ id: 'hm-rpc.0.MEQ0529979.1.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Ruphy.allOn').val;
    if (onOff) {
        setState('hue.0.Ruphy.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Ruphy.allOn', true);
    }
});
on({ id: 'hm-rpc.0.MEQ0529979.2.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.1.Bildschirm_1.on').val;
    if (onOff) {
        setState('hue.1.Bildschirm_1.on', false);
    } else if (!onOff) {
        setState('hue.1.Bildschirm_1.on', true);
    }
});
on({ id: 'hm-rpc.0.MEQ0529979.3.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Ruphy_BettTV.allOn').val;
    if (onOff) {
        setState('hue.0.Ruphy_BettTV.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Ruphy_BettTV.allOn', true);
    }
});
on({ id: 'hm-rpc.0.MEQ0529979.4.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.0.Ruphys_Game.allOn').val;
    if (onOff) {
        setState('hue.0.Ruphys_Game.allOn', false);
    } else if (!onOff) {
        setState('hue.0.Ruphys_Game.allOn', true);
    }
});
on({ id: 'hm-rpc.0.MEQ0529979.5.PRESS_SHORT'}, function (obj) {
    let onOff = getState('hue.1.Bildschirm_2.on').val;
    if (onOff) {
        setState('hue.1.Bildschirm_2.on', false);
    } else if (!onOff) {
        setState('hue.1.Bildschirm_2.on', true);
    }
});
/////////////////////////////////////////////////////////////////////////////////////
