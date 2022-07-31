import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_StudyGroupsInput } from "../inputs/UserUpdateOneWithoutFK_StudyGroupsInput";

@TypeGraphQL.InputType("StudyGroupUpdateWithoutFK_UserOnStudyGroupInput", {
  isAbstract: true
})
export class StudyGroupUpdateWithoutFK_UserOnStudyGroupInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_StudyGroupsInput | undefined;
}
