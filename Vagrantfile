# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  # Forward port 3000 from guest to host
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  # Provisioning with Ansible
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yml"
    ansible.extra_vars = {
      ansible_python_interpreter: "/usr/bin/python3"
    }
  end # This 'end' closes the ansible block

end # This 'end' closes the Vagrant.configure block

