import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserOnStudyGroupUpdateManyWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupUpdateManyWithoutFK_StudyGroupInput";
import { UserUpdateOneWithoutFK_StudyGroupsInput } from "../inputs/UserUpdateOneWithoutFK_StudyGroupsInput";

@TypeGraphQL.InputType("StudyGroupUpdateInput", {
  isAbstract: true
})
export class StudyGroupUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_StudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateManyWithoutFK_StudyGroupInput, {
    nullable: true
  })
  FK_UserOnStudyGroup?: UserOnStudyGroupUpdateManyWithoutFK_StudyGroupInput | undefined;
}
