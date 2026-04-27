import {
  SiJavascript, SiNodedotjs, SiExpress, SiReact,
  SiPostgresql, SiRedis, SiElasticsearch,
  SiMysql, SiDocker, SiJenkins, SiNginx,
  SiGit, SiSocketdotio
} from 'react-icons/si'
import { FaJava, FaDatabase, FaServer, FaAws } from 'react-icons/fa'
import { VscAzureDevops } from 'react-icons/vsc'

export const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Java', icon: FaJava },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'React.js', icon: SiReact },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Oracle', icon: FaDatabase },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Elasticsearch', icon: SiElasticsearch },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure DevOps', icon: VscAzureDevops },
      { name: 'Docker', icon: SiDocker },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'Socket.IO', icon: SiSocketdotio },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Apache Tomcat', icon: FaServer },
    ],
  },
]
