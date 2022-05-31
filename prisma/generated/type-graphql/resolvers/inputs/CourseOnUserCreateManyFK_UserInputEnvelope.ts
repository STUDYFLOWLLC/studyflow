import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateManyFK_UserInput } from "../inputs/CourseOnUserCreateManyFK_UserInput";

@TypeGraphQL.InputType("CourseOnUserCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class CourseOnUserCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseOnUserCreateManyFK_UserInput], {
    nullable: false
  })
  data!: CourseOnUserCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
