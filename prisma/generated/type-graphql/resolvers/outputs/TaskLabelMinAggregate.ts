import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TaskLabelMinAggregate", {
  isAbstract: true
})
export class TaskLabelMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TaskLabelID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Label!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_TaskID!: number | null;
}
