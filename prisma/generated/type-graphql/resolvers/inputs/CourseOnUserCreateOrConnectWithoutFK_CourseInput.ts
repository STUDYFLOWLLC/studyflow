import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateWithoutFK_CourseInput } from "../inputs/CourseOnUserCreateWithoutFK_CourseInput";
import { CourseOnUserWhereUniqueInput } from "../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnUserCreateOrConnectWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserCreateOrConnectWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnUserCreateWithoutFK_CourseInput, {
    nullable: false
  })
  create!: CourseOnUserCreateWithoutFK_CourseInput;
}
