import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyFK_CourseOnTermInput } from "../inputs/FlowCreateManyFK_CourseOnTermInput";

@TypeGraphQL.InputType("FlowCreateManyFK_CourseOnTermInputEnvelope", {
  isAbstract: true
})
export class FlowCreateManyFK_CourseOnTermInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowCreateManyFK_CourseOnTermInput], {
    nullable: false
  })
  data!: FlowCreateManyFK_CourseOnTermInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
