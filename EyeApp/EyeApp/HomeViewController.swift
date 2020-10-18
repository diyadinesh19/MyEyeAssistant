//
//  HomeViewController.swift
//  EyeApp
//
//  Created by Salini Sundaresan on 10/16/20.
//

import UIKit
import UserNotifications

class HomeViewController: UIViewController {

    @IBOutlet weak var useButton: UIButton!
  
    @IBOutlet weak var instructions: UIStackView!
    
    @IBOutlet weak var ExerciseButton: UIButton!
    @IBOutlet weak var exerciseDescription: UILabel!
    @IBOutlet weak var timerSwitch: UISwitch!
    @IBOutlet weak var timerLabel: UILabel!
    var entryIDs:[String] = ["cba2d458-3f4f-4b63-b774-86c8eebd9f4f","41add01a-15a6-44cb-9a67-73298b5bae47","68dea9ac-2c9f-436b-9c8f-9266f13c47b4","b7b79128-7bca-4a4b-8101-006c0a7688ee","66d1ce38-0b78-4d1f-8066-9750e59a048b"]
    var descriptions:[String] = ["Bike Wheel","Elevator","Thumb","Pendulum","Improved posture"]
    var selectedID = ""
    var time = 0
    var timer = Timer()
    let center = UNUserNotificationCenter.current()
    override func viewDidLoad() {
        super.viewDidLoad()
        timerLabel.layer.cornerRadius = 10
        timerLabel.layer.masksToBounds =  true
        ExerciseButton.layer.cornerRadius = 10
        ExerciseButton.layer.masksToBounds =  true
        center.requestAuthorization(options: [.alert,.sound], completionHandler:{ (granted, error) in })
        let content = UNMutableNotificationContent()
        content.title = "Time to exercise!"
        content.body = "1 minute is up, let's rest our eyes!"
        // Do any additional setup after loading the view.
    }
    @IBAction func showHide(_ sender: Any) {
        if(instructions.isHidden){
            instructions.isHidden = false
        }else{
            instructions.isHidden = true
        }
    }
    
    
    @IBAction func openAR(_ sender: Any) {
        if let url = NSURL(string:"https://console.echoar.xyz/arjs?key=falling-truth-0223&entry="+selectedID){
            UIApplication.shared.open(url as URL, options:[:], completionHandler:nil)
        }
    }
    
    @IBAction func timerControl(_ sender: Any) {
        
        if(timerSwitch.isOn){
            ExerciseButton.isHidden = true
            exerciseDescription.isHidden = true
            let content = UNMutableNotificationContent()
            content.title = "Time to exercise!"
            content.body = "1 minute is up, let's rest our eyes!"
            let trigger = UNTimeIntervalNotificationTrigger(timeInterval:60, repeats:false)
            let request = UNNotificationRequest(identifier:"Reminder",content:content, trigger:trigger)
            center.add(request) {(error) in}
            timer = Timer.scheduledTimer(timeInterval: 1, target: self, selector: #selector(HomeViewController.action), userInfo: nil, repeats: true)
            
        }else{
            timer.invalidate()
            time = 0
            timerLabel.text = "1m 00s"
        }
    }
    
    @objc func action(){
        time+=1
        var totalSeconds = 60-time
        var seconds = Int(totalSeconds%60)
        var minutes = Int((totalSeconds-seconds)/60)
        timerLabel.text = String(minutes)+"m "+String(seconds)+"s"
        if(time==60){
            timer.invalidate()
            time = 0
            ExerciseButton.isHidden = false
            exerciseDescription.isHidden = false
            var ind = Int.random(in: 0..<4)
            selectedID = entryIDs[ind]
            exerciseDescription.text = descriptions[ind]
        }
        
        
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
