import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateNestedOneWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupCreateNestedOneWithoutFK_UserOnStudyGroupInput";

@TypeGraphQL.InputType("UserOnStudyGroupCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class UserOnStudyGroupCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SendDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemoveDate?: Date | undefined;

  @TypeGraphQL.Field(_type => StudyGroupCreateNestedOneWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  FK_StudyGroup?: StudyGroupCreateNestedOneWithoutFK_UserOnStudyGroupInput | undefined;
}
