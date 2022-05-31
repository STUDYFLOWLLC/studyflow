import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateManyFK_UserInputEnvelope } from "../inputs/CourseOnUserCreateManyFK_UserInputEnvelope";
import { CourseOnUserCreateOrConnectWithoutFK_UserInput } from "../inputs/CourseOnUserCreateOrConnectWithoutFK_UserInput";
import { CourseOnUserCreateWithoutFK_UserInput } from "../inputs/CourseOnUserCreateWithoutFK_UserInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class CourseOnUserCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [CourseOnUserCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: CourseOnUserCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnUserCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnUserCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnUserWhereUniqueInput[] | undefined;
}
