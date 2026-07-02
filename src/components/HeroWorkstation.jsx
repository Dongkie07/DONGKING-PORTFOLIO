import { useEffect, useRef, useState } from 'react';

const workspaceModes = [
  {
    label: 'Ops',
    title: 'Admin operations',
    metric: '3+ yrs',
    detail: 'CRM reviews, applicant screening, schedules, KPI reports, and organized documentation.',
    command: 'review --leads --screening --reports'
  },
  {
    label: 'Data',
    title: 'Dashboards & reports',
    metric: '2 certs',
    detail: 'Spreadsheet tracking, Looker Studio dashboards, KPI presentation support, and data cleanup.',
    command: 'build --dashboard --kpi --insights'
  },
  {
    label: 'IT',
    title: 'IT support',
    metric: '486 hrs',
    detail: 'Institutional IT internship, troubleshooting, office systems, web app tasks, and user support.',
    command: 'support --systems --users --workflow'
  },
  {
    label: 'Dev',
    title: 'System projects',
    metric: '2 builds',
    detail: 'Restack vulnerability scanner and IPPDD executive dashboard with source code, demo videos, and documentation.',
    command: 'ship --restack --ippdd --demo'
  }
];

const terminalLines = [
  'checking CRM queue',
  'syncing KPI dashboard',
  'reviewing applicant notes',
  'preparing system demo'
];

const miniApps = ['CRM', 'Reports', 'Dashboard', 'Support'];

export function HeroWorkstation() {
  const stageRef = useRef(null);
  const [activeMode, setActiveMode] = useState(0);
  const currentMode = workspaceModes[activeMode];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveMode(index => (index + 1) % workspaceModes.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const updateTilt = event => {
    const element = stageRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    element.style.setProperty('--tilt-x', `${(-y * 8).toFixed(2)}deg`);
    element.style.setProperty('--tilt-y', `${(x * 10).toFixed(2)}deg`);
    element.style.setProperty('--pointer-x', `${(event.clientX - bounds.left).toFixed(0)}px`);
    element.style.setProperty('--pointer-y', `${(event.clientY - bounds.top).toFixed(0)}px`);
  };

  const resetTilt = () => {
    const element = stageRef.current;
    if (!element) return;

    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
    element.style.setProperty('--pointer-x', '50%');
    element.style.setProperty('--pointer-y', '40%');
  };

  return (
    <aside
      className="computer-stage"
      data-reveal
      ref={stageRef}
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
      aria-label="Animated workstation preview showing Romel's admin, data, IT, and development work"
    >
      <div className="stage-orbit stage-orbit-one" aria-hidden="true" />
      <div className="stage-orbit stage-orbit-two" aria-hidden="true" />
      <div className="stage-light" aria-hidden="true" />



      <div className="computer-rig">
        <div className="monitor-shell">
          <div className="monitor-topbar">
            <div className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <strong>romel.workspace</strong>
            <em>online</em>
          </div>

          <div className="monitor-screen">
            <div className="screen-glow" aria-hidden="true" />
            <div className="screen-scanline" aria-hidden="true" />

            <nav className="screen-sidebar" aria-label="Workstation modes">
              {workspaceModes.map((mode, index) => (
                <button
                  type="button"
                  key={mode.label}
                  className={activeMode === index ? 'active' : ''}
                  onClick={() => setActiveMode(index)}
                >
                  {mode.label}
                </button>
              ))}
            </nav>

            <div className="screen-main">
              <div className="dashboard-panel mode-panel">
                <div className="panel-header">
                  <span>{currentMode.title}</span>
                  <small>{currentMode.metric}</small>
                </div>
                <p>{currentMode.detail}</p>
                <div className="flow-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="dashboard-grid">
                <div className="dashboard-panel terminal-panel">
                  <div className="panel-header">
                    <span>Terminal</span>
                    <small>active</small>
                  </div>
                  <div className="terminal-command"><span>$</span> {currentMode.command}</div>
                  <div className="terminal-lines">
                    {terminalLines.map(line => (
                      <p key={line}><span>›</span> {line}</p>
                    ))}
                  </div>
                </div>

                <div className="dashboard-panel app-panel">
                  <div className="panel-header">
                    <span>Workspace</span>
                    <small>ready</small>
                  </div>
                  <div className="mini-app-grid">
                    {miniApps.map((item, index) => (
                      <span key={item} className={index === activeMode ? 'active' : ''}>{item}</span>
                    ))}
                  </div>
                  <div className="pulse-meter" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="monitor-neck" aria-hidden="true" />
        <div className="monitor-base" aria-hidden="true" />
        <div className="desk-shadow" aria-hidden="true" />
        <div className="keyboard-deck" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, index) => <span key={index} />)}
        </div>
        <div className="trackpad" aria-hidden="true" />
      </div>
    </aside>
  );
}
