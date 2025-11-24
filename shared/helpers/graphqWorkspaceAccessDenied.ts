import { Operation } from '@apollo/client';

enum WorkspaceOperations {
  GetWorkspaceMembers = 'GetWorkspaceMembers',
  GetWorkspaceInfo = 'GetWorkspaceInfo',
  InviteWorkspaceMembers = 'InviteWorkspaceMembers',
  LeaveWorkspace = 'LeaveWorkspace',
  UpdateWorkspaceInfo = 'UpdateWorkspaceInfo',
}

const handleWorkspaceAccessDenied = (operation: Operation) => {
  switch (operation.operationName) {
    case WorkspaceOperations.GetWorkspaceMembers:
    case WorkspaceOperations.GetWorkspaceInfo:
    case WorkspaceOperations.InviteWorkspaceMembers:
    case WorkspaceOperations.LeaveWorkspace:
    case WorkspaceOperations.UpdateWorkspaceInfo:
      window.location.replace('/workspaces');
      break;
  }
};

export { handleWorkspaceAccessDenied };
