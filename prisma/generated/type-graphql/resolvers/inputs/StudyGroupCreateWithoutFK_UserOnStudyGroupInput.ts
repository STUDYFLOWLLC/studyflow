import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_StudyGroupsInput } from "../inputs/UserCreateNestedOneWithoutFK_StudyGroupsInput";

@TypeGraphQL.InputType("StudyGroupCreateWithoutFK_UserOnStudyGroupInput", {
  isAbstract: true
})
export class StudyGroupCreateWithoutFK_UserOnStudyGroupInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_StudyGroupsInput | undefined;
}
