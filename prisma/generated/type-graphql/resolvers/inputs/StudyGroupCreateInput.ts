import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_StudyGroupsInput } from "../inputs/UserCreateNestedOneWithoutFK_StudyGroupsInput";
import { UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput";

@TypeGraphQL.InputType("StudyGroupCreateInput", {
  isAbstract: true
})
export class StudyGroupCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_StudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput, {
    nullable: true
  })
  FK_UserOnStudyGroup?: UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput | undefined;
}
