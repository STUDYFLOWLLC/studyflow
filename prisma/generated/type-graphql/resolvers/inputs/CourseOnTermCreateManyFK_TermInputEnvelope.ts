import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateManyFK_TermInput } from "../inputs/CourseOnTermCreateManyFK_TermInput";

@TypeGraphQL.InputType("CourseOnTermCreateManyFK_TermInputEnvelope", {
  isAbstract: true
})
export class CourseOnTermCreateManyFK_TermInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseOnTermCreateManyFK_TermInput], {
    nullable: false
  })
  data!: CourseOnTermCreateManyFK_TermInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
